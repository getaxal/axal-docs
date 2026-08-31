import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const questions = [
  {
    category: 'EARNING',
    question: "Can I use Axal if I'm new to crypto or don't have a wallet?",
    answer:
      'Absolutely. You can purchase stablecoins directly through Axal using Moonpay, which supports debit cards and bank transfers — no prior crypto experience or separate wallet required. If you already own crypto, you can also transfer your existing USDC on Base to your Axal wallet.',
  },
  {
    category: 'EARNING',
    question: 'How is the yield (APY) generated?',
    answer:
      'Your funds are automatically allocated to tier-1, overcollateralized DeFi lending platforms like Morpho and Aave. Axal continuously monitors and rebalances your portfolio to maintain APY targets and minimize risk.',
  },
  {
    category: 'SECURITY',
    question: 'Is Axal safe to use?',
    answer:
      'Axal created a custom Trusted Execution Environment (TEE), the same technology used by Face ID, to keep user funds safe. Your session keys and private keys are encrypted inside hardware-isolated chips and never leave the secure enclave — not even Axal can access them.',
  },
  {
    category: 'FEES',
    question: 'Are there any fees for using Axal?',
    answer:
      'Axal takes a 15% fee of the yield generated through the platform — never an upfront or withdrawal fee. Fees are only ever charged when you actually earn.',
  },
  {
    category: 'RISKS',
    question: 'What are the risks of high-yield crypto strategies?',
    answer:
      "Because the main asset is tied to the dollar, the main risks aren't price swings but technical or structural ones — smart contract failures, stablecoin de-pegs, market volatility, and oracle issues. Axal only uses audited, battle-tested protocols and continuously monitors pool risk to reallocate funds if a pool becomes too risky.",
  },
]

export function PopularQuestions() {
  return (
    <section className="mx-auto w-full max-w-6xl py-8">
      <h2 className="mb-6 text-2xl font-semibold text-ink">Popular questions</h2>
      <Accordion collapsible type="single">
        {questions.map((item) => (
          <AccordionItem className="border-border" key={item.question} value={item.question}>
            <AccordionTrigger className="gap-6 py-6 hover:no-underline [&>svg]:size-6 [&>svg]:text-accent">
              <span className="flex flex-1 items-center gap-4">
                <span className="shrink-0 rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-semibold tracking-wide text-accent-deep">
                  {item.category}
                </span>
                <span className="text-lg font-semibold text-ink sm:text-xl">
                  {item.question}
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="max-w-3xl pr-10 pb-6 text-base leading-relaxed text-stone">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
