import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div className='py-10 items-center h-[90vh] flex gap-10  px-18'>
      <LeftContent/>
      <RightContent/>
    </div>
  )
}

export default Page1Content
