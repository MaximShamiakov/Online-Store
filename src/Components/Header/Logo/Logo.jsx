import React from 'react'
import { useSelector } from 'react-redux'

export default function Logo(props) {
  const logo = useSelector(({logo}) => logo.logo)

  return (
    <div className="cont icon">
        <h2 className="logo">{logo}</h2>
    </div>
  )
}
