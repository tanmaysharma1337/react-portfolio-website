import React, { useRef } from 'react'

const ContentWrapper = ({children}) => {
  return (
    <div className='main-content'>
        {children}
    </div>
  )
}

export default ContentWrapper
