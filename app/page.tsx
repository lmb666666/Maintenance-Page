import { Countdown } from "@/components/countdown"
import { StatusIndicator } from "@/components/status-indicator"

// 预计恢复时间（可按需修改）
const RESTORE_TIME = "2026-05-05T08:00:00+08:00"
const CONTACT_EMAIL = "2668035546@qq.com"

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
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-black text-white">
      {/* 背景装饰：极细网格 + 顶部柔光 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-white/[0.06] blur-3xl"
      />

      {/* 主体内容 */}
      <section className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 py-16 sm:py-20">
        <StatusIndicator />

        <h1 className="mt-10 text-balance text-center font-serif text-5xl font-normal leading-[1.05] tracking-tight sm:text-7xl">
          系统维护中
        </h1>

        <p className="mt-6 max-w-lg text-pretty text-center text-base leading-relaxed text-white/60">
          网站正在进行例行升级，敬请稍候。
        </p>

        {/* 倒计时 */}
        <div className="mt-14 w-full">
          <div className="mb-3 text-center text-[11px] uppercase tracking-[0.32em] text-white/40">
            距恢复服务
          </div>
          <Countdown target={RESTORE_TIME} />
        </div>

        {/* 详情信息 */}
        <dl className="mt-12 grid w-full grid-cols-1 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] sm:grid-cols-3">
          <div className="flex flex-col gap-2 bg-black px-5 py-5">
            <dt className="text-[10px] uppercase tracking-[0.25em] text-white/40">
              预计恢复
            </dt>
            <dd className="font-mono text-sm text-white">{restoreLabel}</dd>
          </div>
          <div className="flex flex-col gap-2 bg-black px-5 py-5">
            <dt className="text-[10px] uppercase tracking-[0.25em] text-white/40">
              所有人
            </dt>
            <dd className="font-serif text-xl leading-none text-white">Liang</dd>
          </div>
          <div className="flex flex-col gap-2 bg-black px-5 py-5">
            <dt className="text-[10px] uppercase tracking-[0.25em] text-white/40">
              联系邮箱
            </dt>
            <dd>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-mono text-sm text-white underline-offset-4 transition-colors hover:text-white/70 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </dd>
          </div>
        </dl>
      </section>

      {/* 页脚 */}
      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-2 px-6 py-6 text-[11px] uppercase tracking-[0.22em] text-white/40 sm:flex-row">
          <span>© {new Date().getFullYear()} Liang</span>
          <span className="font-mono normal-case tracking-normal text-white/30">
            status: maintenance — 503
          </span>
        </div>
      </footer>
    </main>
  )
}
