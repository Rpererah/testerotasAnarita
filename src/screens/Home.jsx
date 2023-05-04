import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      
      Home
      <br />
      <Link to={"/sobre"}>clique aqui</Link> para ir ao sobreNos
      
    </div>
  )
}
