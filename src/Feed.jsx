import React, { useState, useEffect } from 'react';
import "./Feed.css";
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from "./firebase";
import { firebase } from "./firebase";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from "react-flip-move";

function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
    }, [])

    function sendPost(event) {
        event.preventDefault();
        if (input.trim() !== "") { // Check if the input is not empty or whitespace
            db.collection("posts").add(
                {
                    name: user.displayName,
                    description: user.email,
                    message: input,
                    photoUrl: user.photoUrl || "",
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                }
            );
            setInput(""); // Clear the input field after sending the post
        }
    };

    // Handle "Enter" key press in the input field
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            sendPost(event);
        }
    }

    return (
        <div className='feed'>
            <div className='feed__inputContainer'>
                <div className='feed__input'>
                    <CreateIcon />
                    <form>
                        <input
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            type="text"
                            onKeyPress={handleKeyPress} // Add event listener for "Enter" key press
                            placeholder="Start a post" // Placeholder text
                        />
                        <button 
                            type="submit" 
                            onClick={sendPost} 
                            disabled={!input.trim()} // Disable button if input is empty or just whitespace
                        >
                           Post
                        </button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7FC15E" />
                </div>
            </div>

            <FlipMove>
                {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                    <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
                ))}
            </FlipMove>
        </div>
    )
}

export default Feed;
