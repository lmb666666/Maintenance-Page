"use client"

import { useEffect, useState } from "react"

interface CountdownProps {
  /** ISO string of the target restoration time */
  target: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  done: boolean
}

function calculate(target: string): TimeLeft {
  const diff = new Date(target).getTime() - Date.now()
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true }
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { days, hours, minutes, seconds, done: false }
}

const pad = (n: number) => n.toString().padStart(2, "0")

export function Countdown({ target }: CountdownProps) {
  const [time, setTime] = useState<TimeLeft | null>(null)

  useEffect(() => {
    setTime(calculate(target))
    const id = setInterval(() => setTime(calculate(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const blocks = [
    { label: "天", value: time ? pad(time.days) : "--" },
    { label: "时", value: time ? pad(time.hours) : "--" },
    { label: "分", value: time ? pad(time.minutes) : "--" },
    { label: "秒", value: time ? pad(time.seconds) : "--" },
  ]

  return (
    <div className="grid grid-cols-4 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/5">
      {blocks.map((b) => (
        <div
          key={b.label}
          className="flex flex-col items-center justify-center gap-2 bg-black px-4 py-6 sm:py-8"
        >
          <span
            className="font-serif text-4xl font-normal leading-none tracking-tight text-white sm:text-6xl md:text-7xl"
            aria-live="polite"
          >
            {b.value}
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/50 sm:text-xs">
            {b.label}
          </span>
        </div>
      ))}
    </div>
  )
}
