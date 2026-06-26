"use client";

import { X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { socialProofMessages } from "@/lib/site";

const firstDelay = 4000;
const minNextDelay = 12000;
const maxNextDelay = 18000;
const visibleTime = 6000;
const closedDelay = 46000;

function randomDelay() {
  return minNextDelay + Math.floor(Math.random() * (maxNextDelay - minNextDelay));
}

function getRandomIndex(previousIndex: number) {
  if (socialProofMessages.length <= 1) {
    return 0;
  }

  let nextIndex = Math.floor(Math.random() * socialProofMessages.length);

  while (nextIndex === previousIndex) {
    nextIndex = Math.floor(Math.random() * socialProofMessages.length);
  }

  return nextIndex;
}

export function SocialProofPopup() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const messageIndexRef = useRef(0);
  const showTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = useCallback(() => {
    if (showTimer.current) {
      clearTimeout(showTimer.current);
      showTimer.current = null;
    }

    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
  }, []);

  const schedule = useCallback(
    (delay: number) => {
      clearTimers();

      showTimer.current = setTimeout(() => {
        const nextIndex = getRandomIndex(messageIndexRef.current);
        messageIndexRef.current = nextIndex;
        setMessageIndex(nextIndex);
        setVisible(true);

        hideTimer.current = setTimeout(() => {
          setVisible(false);
          schedule(randomDelay());
        }, visibleTime);
      }, delay);
    },
    [clearTimers],
  );

  useEffect(() => {
    schedule(firstDelay);

    return clearTimers;
  }, [clearTimers, schedule]);

  function handleClose() {
    setVisible(false);
    setDismissed(true);
    schedule(closedDelay);
  }

  return (
    <div
      aria-live="polite"
      className={`fixed bottom-4 left-4 z-40 w-[min(334px,calc(100vw-32px))] transition-opacity duration-300 sm:bottom-6 sm:left-6 ${
        visible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        className={`rounded-2xl border border-white/10 bg-[#070a18]/95 p-4 shadow-[0_18px_54px_rgba(0,0,0,0.42),0_0_30px_rgba(139,92,246,0.2)] backdrop-blur-xl ${
          visible ? "animate-[popup-in_0.36s_ease-out]" : ""
        }`}
      >
        <button
          type="button"
          aria-label="Fechar aviso"
          onClick={handleClose}
          className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full text-slate-500 transition hover:bg-white/10 hover:text-white"
        >
          <X className="h-3.5 w-3.5" aria-hidden="true" />
        </button>

        <div className="flex items-start gap-3 pr-6">
          <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-supreme-gradient text-xs font-black text-white">
            SF
          </span>
          <div>
            <p className="text-[13px] font-extrabold leading-snug text-white">
              {socialProofMessages[messageIndex].split(" ").slice(0, 2).join(" ")}
            </p>
            <p className="mt-1 text-[12px] font-semibold leading-relaxed text-slate-300">
              {socialProofMessages[messageIndex]}
            </p>
            {dismissed ? (
              <span className="sr-only">Aviso fechado. Outro aviso poderá aparecer depois.</span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
