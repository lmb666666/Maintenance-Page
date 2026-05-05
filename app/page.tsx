import { Countdown } from "@/components/countdown"
import { StatusIndicator } from "@/components/status-indicator"

// 强制每次请求动态渲染，确保倒计时基准准确
export const dynamic = "force-dynamic"

const CONTACT_EMAIL = "2668035546@qq.com"
const MAINTENANCE_DURATION_DAYS = 3

const formatChineseDateTime = (date: Date) => {
  return new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date)
}

export default function MaintenancePage() {
  const restoreDate = new Date(Date.now() + MAINTENANCE_DURATION_DAYS * 24 * 60 * 60 * 1000)
  const restoreIso = restoreDate.toISOString()
  const restoreLabel = formatChineseDateTime(restoreDate)

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-black text-white">
      {/* 背景层 1：对角斜纹 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #ffffff 0, #ffffff 1px, transparent 1px, transparent 14px)",
        }}
      />

      {/* 背景层 2：极细网格（中央渐隐） */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* 背景层 3：水平扫描线 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0, transparent 3px, #ffffff 3px, #ffffff 4px)",
        }}
      />

      {/* 背景层 4：顶部柔光 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 left-1/2 h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-white/[0.07] blur-3xl"
      />

      {/* 背景层 5：底部柔光 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[360px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl"
      />

      {/* 背景层 6：四角装饰刻度 */}
      <div aria-hidden className="pointer-events-none absolute inset-6 sm:inset-10">
        <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-white/25" />
        <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-white/25" />
        <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-white/25" />
        <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-white/25" />
      </div>

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
          <Countdown target={restoreIso} />
        </div>

        {/* 详情信息 */}
        <dl className="mt-12 grid w-full grid-cols-1 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] sm:grid-cols-3">
          <div className="flex flex-col gap-2 bg-black/80 px-5 py-5 backdrop-blur-sm">
            <dt className="text-[10px] uppercase tracking-[0.25em] text-white/40">
              预计恢复
            </dt>
            <dd className="font-mono text-sm text-white">{restoreLabel}</dd>
          </div>
          <div className="flex flex-col gap-2 bg-black/80 px-5 py-5 backdrop-blur-sm">
            <dt className="text-[10px] uppercase tracking-[0.25em] text-white/40">
              所有人
            </dt>
            <dd className="font-serif text-xl leading-none text-white">Liang</dd>
          </div>
          <div className="flex flex-col gap-2 bg-black/80 px-5 py-5 backdrop-blur-sm">
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
      <footer className="relative z-10 border-t border-white/10 bg-black/60 backdrop-blur-sm">
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
