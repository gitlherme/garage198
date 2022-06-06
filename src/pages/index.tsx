import type { NextPage } from 'next'
import { Hero } from '../components/Hero'
import { OpeningHours } from '../components/OpeningHours'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <OpeningHours /> 
    </>
  ) 
}

export default Home
