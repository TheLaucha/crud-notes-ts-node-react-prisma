import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='navbar bg-violet-300'>
      <div className='flex-1'>
        <a className='btn btn-ghost text-xl'>LauchaDev</a>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/productList'>List of products</Link>
          </li>
          <li>
            <Link to='/product'>Product</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
