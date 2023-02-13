import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

const drawer = document.getElementById('drawer')

interface Props {
  children: React.ReactNode
  isOpen: boolean
}

const DrawerPortal = ({ isOpen, children }: Props) => {
  const divRef = useRef<HTMLDivElement>(document.createElement('div'))

  useEffect(() => {
    if (isOpen) {
      drawer?.appendChild(divRef.current)
    }

    return () => {
      if (drawer?.contains(divRef.current)) drawer?.removeChild(divRef.current)
    }
  }, [isOpen])

  if (!isOpen) {
    return null
  }

  return ReactDOM.createPortal(children, divRef.current)
}

export default DrawerPortal
