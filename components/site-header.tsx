"use client"

import React from 'react'
import { ModeToggle } from './mode-toggle'
import Nav from './nav'

function SiteHeader() {
  return (
    <header className='w-full h-16 z-50 flex justify-end px-12 items-center sticky top-0 space-x-4' >
        <Nav />
        <ModeToggle />
    </header>
  )
}   

export default SiteHeader
