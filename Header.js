import { BusinessCenter, Chat, Home, Notifications, Search, SupervisorAccount } from '@material-ui/icons'
import React from 'react'
import './Header.css'

import HeaderOption from './HeaderOption'

const Header = () => {
  return (
    <div className='header'>
        <div className='header__left'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYiSZ7pgNHIi4X9la9Z1_oHsBpntPBeY6fA&usqp=CAU' alt='logo' />
                <div className='header__search'>
                   <Search />
                </div>
        </div>
        <div className='header__right'>
            <HeaderOption Icon={Home} title='Home' />
            <HeaderOption Icon={SupervisorAccount} title='My Network' />
            <HeaderOption Icon={BusinessCenter} title='Jobs' />
            <HeaderOption Icon={Chat} title='Messaging' />
            <HeaderOption Icon={Notifications} title='Notifications' />
            <HeaderOption avatar='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwwJr1AhjL4_5jSWjRmGDQj46VxvlpAtZb08-FEi5WvricTE6HFheUrWvhDJxn5beEnh4&usqp=CAU' title='Me' />
        </div>
    </div>
  )
}

export default Header