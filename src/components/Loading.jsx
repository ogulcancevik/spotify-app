import React from 'react'

export const Loading = () => {
  return (
    <div
      className="w-full flex justify-center items-center"
      style={{
        height: 'calc(100vh - 125px)'
      }}
    >
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
