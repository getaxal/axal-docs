import { LuArrowUpRight } from 'react-icons/lu'

const WIDTH = 280
const HEIGHT = 110

// Portfolio value samples (0-100 scale), trending up like a real growth curve.
const values = [8, 9, 11, 13, 15, 19, 24, 28, 30, 36, 45, 55, 63, 70, 75, 79, 83, 87, 90, 93]

function toPoints(vals: number[]) {
  return vals.map((v, i) => {
    const x = (i / (vals.length - 1)) * WIDTH
    const y = HEIGHT - (v / 100) * HEIGHT
    return [x, y] as const
  })
}

function smoothPath(points: readonly (readonly [number, number])[]) {
  if (points.length === 0) return ''
  let d = `M ${points[0][0]},${points[0][1]}`
  for (let i = 0; i < points.length - 1; i++) {
    const [x0, y0] = points[i]
    const [x1, y1] = points[i + 1]
    const mx = (x0 + x1) / 2
    d += ` Q ${x0},${y0} ${mx},${(y0 + y1) / 2}`
  }
  const last = points[points.length - 1]
  d += ` T ${last[0]},${last[1]}`
  return d
}

const points = toPoints(values)
const linePath = smoothPath(points)
const areaPath = `${linePath} L ${WIDTH},${HEIGHT} L 0,${HEIGHT} Z`
const [lastX, lastY] = points[points.length - 1]

export function BalanceCard() {
  return (
    <div className="mx-auto w-full max-w-80 rounded-[32px] border border-border bg-surface p-6 shadow-xl">
      <p className="text-xs font-medium text-stone">Balance</p>
      <p className="mt-1 text-4xl font-semibold text-ink">$12,480.36</p>

      <div className="mt-2 flex items-center gap-1 text-sm font-medium text-accent-deep">
        <LuArrowUpRight className="size-4" />
        +$24.18 today
      </div>

      <div className="mt-4 inline-flex items-center rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-deep">
        7.2% APY
      </div>

      <div className="mt-6">
        <svg
          className="w-full"
          height={HEIGHT}
          preserveAspectRatio="none"
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        >
          <defs>
            <linearGradient id="balanceGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.28" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </linearGradient>
          </defs>

          {[0.25, 0.5, 0.75].map((f) => (
            <line
              key={f}
              stroke="var(--border)"
              strokeDasharray="2 3"
              strokeWidth="1"
              x1="0"
              x2={WIDTH}
              y1={HEIGHT * f}
              y2={HEIGHT * f}
            />
          ))}

          <path d={areaPath} fill="url(#balanceGradient)" />
          <path d={linePath} fill="none" stroke="var(--accent)" strokeLinecap="round" strokeWidth="2.5" />
          <circle cx={lastX} cy={lastY} fill="var(--accent)" r="4" stroke="var(--surface)" strokeWidth="2" />
        </svg>

        <div className="mt-1 flex items-center justify-between text-[11px] text-stone">
          <span>90 days ago</span>
          <span>Today</span>
        </div>
      </div>
    </div>
  )
}
