import type { NextPage } from 'next'
import { Hero } from '../components/Hero'
import { OpeningHours } from '../components/OpeningHours'
import { Services } from '../components/Services'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <OpeningHours /> 
      <Services /> 
    </>
  ) 
}

export default Home
