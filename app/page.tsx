import { Hero } from '@/components/home/hero'
import { PopularQuestions } from '@/components/home/popular-questions'
import { StartHere } from '@/components/home/start-here'

export default function Home() {
  return (
    <>
      <Hero />
      <StartHere />
      <PopularQuestions />
    </>
  )
}
