import React from 'react'
import Container from '../components/Container'
import DemoHero from '../components/demo/DemoHero'
import MarketTicker from '../components/demo/MarketTicker'
import ListingBoard from '../components/demo/ListingBoard'
import AthleteIntel from '../components/demo/AthleteIntel'
import TradeTape from '../components/demo/TradeTape'
import VenueLiquidity from '../components/demo/VenueLiquidity'
import IpoRail from '../components/demo/IpoRail'
import InsightRotator from '../components/demo/InsightRotator'

export default function Demo() {
  return (
    <div className="bg-gray-100 min-h-screen pb-16">
      <DemoHero />
      <MarketTicker />
      <Container className="pt-8 md:pt-10 space-y-8">
        <InsightRotator />
        <ListingBoard />
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <AthleteIntel />
            <IpoRail />
          </div>
          <div className="space-y-8">
            <TradeTape />
            <VenueLiquidity />
          </div>
        </div>
      </Container>
    </div>
  )
}
