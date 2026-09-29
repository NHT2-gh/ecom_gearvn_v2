"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/homepage.module.css";

interface CountdownProps {
  targetDate?: Date;
}

export default function Countdown({ targetDate }: CountdownProps) {
  // Default to 24 hours from now if no target date provided
  const defaultTarget = new Date();

  defaultTarget.setHours(defaultTarget.getHours() + 24);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = targetDate || defaultTarget;

    const updateCountdown = () => {
      const now = new Date().getTime();
      const targetTime = target.getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  const styleBoxCounter =
    "bg-white flex justify-center items-center font-bold text-base size-[2rem] rounded-sm text-center";

  return (
    <div className="flex items-center gap-1">
      <div className={styleBoxCounter}>
        <span className={styles.countdown}>
          <span
            style={{ "--value": timeLeft.days } as React.CSSProperties}
            aria-live="polite"
            aria-label="days counter"
            className="text-[#2152F5]"
          >
            {formatNumber(timeLeft.days)}
          </span>
        </span>
      </div>
      <span className="text-primary font-medium">:</span>
      <div className={styleBoxCounter}>
        <span className={styles.countdown}>
          <span
            style={{ "--value": timeLeft.hours } as React.CSSProperties}
            aria-live="polite"
            aria-label="hours counter"
            className="text-[#2152F5]"
          >
            {formatNumber(timeLeft.hours)}
          </span>
        </span>
      </div>
      <span className="text-primary font-medium">:</span>

      <div className={styleBoxCounter}>
        <span className={styles.countdown}>
          <span
            style={{ "--value": timeLeft.minutes } as React.CSSProperties}
            aria-live="polite"
            aria-label="minutes counter"
            className="text-[#2152F5]"
          >
            {formatNumber(timeLeft.minutes)}
          </span>
        </span>
      </div>
      <span className="text-primary font-medium">:</span>

      <div className={styleBoxCounter}>
        <span className={styles.countdown}>
          <span
            style={{ "--value": timeLeft.seconds } as React.CSSProperties}
            aria-live="polite"
            aria-label="seconds counter"
            className="text-[#2152F5]"
          >
            {formatNumber(timeLeft.seconds)}
          </span>
        </span>
      </div>
    </div>
  );
}
