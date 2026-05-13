import React from 'react'
import Hero from '../components/Hero'
import Boxes from '../components/Boxes'
import StatsStrip from '../components/home/StatsStrip'

export default function Home() {
  return (
    <>
      <StatsStrip />
      <Hero />
      <Boxes />
    </>
  )
}
