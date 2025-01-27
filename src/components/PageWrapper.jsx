import React from 'react'

const PageWrapper = ({children}) => {
  return (
    <div className='max-w-7xl mx-auto'>
      {children}
    </div>
  )
}

export default PageWrapper