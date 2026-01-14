import React from 'react'
import '../styles/Header.css'
function Header() {
  return (
    <div>
      <div className='Navbar'>
        <div className='logo'>
          <h1><span className=''>Bazarstore.Az</span></h1>
        </div>
        <select>
          <option>Catdirilma Unvan secin</option>
        </select>
        <input placeholder='Mehsul axtar' /><i class="fa-solid fa-magnifying-glass"></i>
        <div className='const'>
          <i class="fa-regular fa-user"></i>
          <i class="fa-regular fa-heart"></i>
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
      </div>

    </div>
  )
}

export default Header