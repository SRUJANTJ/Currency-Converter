import React from 'react'

import { Analytics } from "@vercel/analytics/react"
import CurrencyCalculator from './CurrencyCalculator'

export default function Home() {
  return (
<>
<Analytics/>
<CurrencyCalculator/>
</>  )
}
