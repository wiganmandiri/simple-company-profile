import React from 'react'
import { baseUrl } from '../helpers/baseUrl'

const Img = ({
  src,
  alt,
  className,
  onError,
  onClick
}: any) => {
  const errorPath = baseUrl("/no-image.svg")
  return (
    <img
      onClick={onClick}
      src={src}
      alt={alt}
      className={className}
      onError={(e: any) => {
        e.target.onerror = null
        e.target.src = errorPath
      }}
    />
  )
}

export default Img