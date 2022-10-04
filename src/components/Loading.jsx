import React from 'react'

export const Loading = ({ LoaderComponent }) => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <LoaderComponent color="white" />
    </div>
  )
}
