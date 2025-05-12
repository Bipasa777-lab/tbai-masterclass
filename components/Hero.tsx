import React from 'react'
import Button from './Button'

type Props = {}

function Hero({}: Props) {
  return (
    <section>
      <Button
        text="Get Started"
        bgColor="bg-blue-500"
        textColor="text-white"
        />
      <Button
        text="Get Started"
        bgColor="bg-red-500"
        textColor="text-black"
        />
      <Button
        text="Get Started"
        bgColor="bg-green-500"
        textColor="text-black"
        />
    </section>
  )
}

export default Hero