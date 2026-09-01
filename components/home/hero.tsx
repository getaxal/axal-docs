import { BalanceCard } from '@/components/home/balance-card'
import { Search } from '@/components/navigation/search'

export function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 pb-16 md:grid-cols-2 md:pb-24">
      <div className="flex flex-col items-start gap-5">
        <span className="text-sm font-semibold tracking-wide text-accent uppercase">
          Axal Help Center
        </span>
        <h1 className="text-4xl font-semibold text-ink sm:text-5xl">
          How can we help you today?
        </h1>
        <p className="max-w-md text-base text-stone">
          Search our help center or browse guides on deposits, earning, withdrawals, and
          security.
        </p>
        <Search placeholder="Try 'how do I withdraw'" variant="hero" />
      </div>

      <BalanceCard />
    </section>
  )
}
