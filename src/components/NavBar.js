import React from 'react'
import '../Styles/NavBar.css'

const NavBar = ({size, setShow}) => {
  return (
    <nav>
        <div className='nav_box'>
            <span className='my_shop' onClick={()=>setShow(true)}>
                <i>ShopX</i>
            </span>
            <div className='cart' onClick={()=>setShow(false)}>
                <span>
                    <i className='fas fa-cart-plus'></i>
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default NavBar