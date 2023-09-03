import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <ul className='flex space-x-4' >
        <Link
        href='https://twitter.com/trycortex'
        className='underline cursor-pointer underline-offset-2 hover:opacity-70 transition-opacity'
        >Twitter</Link>
          <Link
          href={"https://discord.gg/kKDCaSZCQh"}
          target='_blank'
        className='underline cursor-pointer underline-offset-2 hover:opacity-70 transition-opacity'
        >Discord</Link>
    </ul>
  )
}

export default Nav
