import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { OpeningHours } from '../components/OpeningHours'
import { Services } from '../components/Services'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Barbearia Garage 198</title>
      </Head>
      <Header /> 
      <Hero />
      <OpeningHours /> 
      <Services /> 
    </>
  ) 
}

export default Home
