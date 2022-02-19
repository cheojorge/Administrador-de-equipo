import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
        <Link to={'/player/list'} >Manage Player</Link>
        <em> | </em>
        <Link to={'/status'} >Manage Player Status</Link>
        
    </div>
  )
}
