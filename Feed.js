import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import './Feed.css'
import InputOption from './InputOption'
import Post from './Post'
import { db } from '../firebase'
import firebase from 'firebase'

const Feed = () => {
    const [posts, setPosts] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()                      
            })))
        })
    },[])

    console.log(posts)

    const sendPost = e => {
        e.preventDefault()
        db.collection('posts').add({
            name: 'Arati Khatale',
            description: 'This is a test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('')
    }

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <Create />
                    <form onSubmit={sendPost}>
                        <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={Image} title="Photo" color="#70B5F9" /> 
                    <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
                    <InputOption Icon={EventNote} title="Event" color="#C0CBCD" /> <InputOption Icon={CalendarViewDay} title="Write Article"
                        color="#7FC15E" />
                </div>
                {posts.map(({ id, data }) => (
                    <Post key={id} name={data.name} description={data.description} message={data.message} photoUrl={data.photoUrl} />
                ))}
            </div>
        </div>
    )
}

export default Feed