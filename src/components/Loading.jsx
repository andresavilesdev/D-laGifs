import React from 'react'
import { FourSquare } from 'react-loading-indicators'

export const Loading = ({ isLoading }) => {
  return (
    isLoading && <FourSquare className="Loading" speedPlus={"1"} color="#000000" size="large" text="Loading..." textColor="#000000" />
  )
}
