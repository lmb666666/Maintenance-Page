export function StatusIndicator() {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 backdrop-blur-sm">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70 opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
      </span>
      <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/80">
        系统维护中
      </span>
    </div>
  )
}
