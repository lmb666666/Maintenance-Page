import { Countdown } from "@/components/countdown"
import { StatusIndicator } from "@/components/status-indicator"

// 预计恢复时间（可按需修改）
const RESTORE_TIME = "2026-05-05T08:00:00+08:00"

const formatChineseDateTime = (iso: string) => {
  const d = new Date(iso)
  return new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(d)
}

export default function MaintenancePage() {
  const restoreLabel = formatChineseDateTime(RESTORE_TIME)

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* 背景装饰：极细网格 + 顶部柔光 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-white/[0.06] blur-3xl"
      />

      {/* 顶部导航 */}
      <header className="relative z-10 flex items-center justify-between border-b border-white/10 px-6 py-5 sm:px-10">
        <div className="flex items-center gap-3">
          <div
            aria-hidden
            className="flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-white/5"
          >
            <span className="font-serif text-lg leading-none">L</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-medium tracking-wide">Liang</span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-white/50">
              Studio
            </span>
          </div>
        </div>
        <div className="hidden sm:block">
          <StatusIndicator />
        </div>
      </header>

      {/* 主体内容 */}
      <section className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pb-20 pt-12 sm:pt-20">
        <div className="sm:hidden">
          <StatusIndicator />
        </div>

        <p className="mt-8 text-[11px] uppercase tracking-[0.32em] text-white/50 sm:mt-0">
          Scheduled Maintenance
        </p>

        <h1 className="mt-6 text-balance text-center font-serif text-5xl font-normal leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
          我们正在
          <span className="italic text-white/70"> 精心打磨 </span>
          <br className="hidden sm:block" />
          一些细节
        </h1>

        <p className="mt-8 max-w-xl text-pretty text-center text-base leading-relaxed text-white/60 sm:text-lg">
          网站正在进行例行系统维护与升级，
          以确保为您提供更稳定、更优质的体验。
          给您带来的不便，敬请谅解。
        </p>

        {/* 倒计时 */}
        <div className="mt-14 w-full max-w-2xl">
          <div className="mb-4 flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-white/40">
            <span>距恢复服务</span>
            <span className="font-mono">EST · 实时</span>
          </div>
          <Countdown target={RESTORE_TIME} />
        </div>

        {/* 详情信息卡 */}
        <div className="mt-10 grid w-full max-w-2xl grid-cols-1 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] sm:grid-cols-2">
          <div className="flex flex-col gap-1.5 bg-black px-5 py-5">
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
              预计恢复时间
            </span>
            <span className="font-mono text-sm text-white">{restoreLabel}</span>
          </div>
          <div className="flex flex-col gap-1.5 bg-black px-5 py-5">
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
              网站所有人
            </span>
            <span className="font-serif text-xl leading-none text-white">
              Liang
            </span>
          </div>
        </div>

        <p className="mt-10 max-w-md text-center text-xs leading-relaxed text-white/40">
          如有紧急事项，请稍后再访问本站。
          感谢您的耐心等待 —— 我们会尽快与您再次相见。
        </p>
      </section>

      {/* 页脚 */}
      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-6 text-[11px] uppercase tracking-[0.22em] text-white/40 sm:flex-row sm:px-10">
          <span>© {new Date().getFullYear()} Liang. All rights reserved.</span>
          <span className="font-mono normal-case tracking-normal text-white/30">
            status: maintenance — 503
          </span>
        </div>
      </footer>
    </main>
  )
}
