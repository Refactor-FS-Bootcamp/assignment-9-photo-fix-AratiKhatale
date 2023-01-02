import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  const recentItem = topic => (
      <div className="sidebar__recentItem">
          <span className="sidebar__hash">#</span>
          <p>{topic}</p>
      </div>
  )

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img src='images.1.jpg' alt='Baground' />
        <Avatar className='sidebar__avtar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwwJr1AhjL4_5jSWjRmGDQj46VxvlpAtZb08-FEi5WvricTE6HFheUrWvhDJxn5beEnh4&usqp=CAU'  />
        <h2>Arati Khatale</h2> 
        <h4>aratikhatale117@gmail.com</h4>
      </div>
      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who Viewed You</p>
          <p className='sidebar__statNumber'>2,544</p>
        </div>
        <div className='sidebar__stat'> 
          <p>Views on post</p>
          <p className='sidebar__statNumber'>2,300</p>
        </div>
        </div>
        <div className='sidebar__bottom'>
          <p>Recent</p>
          {recentItem("ReactJs")}
          {recentItem("React")}
          {recentItem("Redux")}
          {recentItem("HTML")}
          {recentItem("CSS")}
          {recentItem("NodeJs")}
        </div>
     
    </div>
  )
}

export default Sidebar