import React from 'react'
import './Post.css'
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import InputOption from './InputOption'
import { Avatar } from '@material-ui/core'

const Post = ({ name, description, message, photoUrl }) => {
    return (
        <div className='post'>
            <div className="post__header">
                <Avatar className='sidebar__avtar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwwJr1AhjL4_5jSWjRmGDQj46VxvlpAtZb08-FEi5WvricTE6HFheUrWvhDJxn5beEnh4&usqp=CAU'/>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p> </div>
            </div>
            <div className="post__body">
                <p>{message}</p> </div>
            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlined} title="Like" color="gray" />
                <InputOption Icon={ChatOutlined} title="Comment" color="gray" /> 
                <InputOption Icon={ShareOutlined} title="Share" color="gray" />
                 <InputOption Icon={SendOutlined} title="Send" color="gray" />
            </div>
        </div>
    )
}

export default Post