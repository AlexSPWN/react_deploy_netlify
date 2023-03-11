//import React from 'react'
/* import { useContext, useState } from 'react'; */
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
/* import api from './api/posts'; */
/* import DataContext from './context/DataContext'; */
import { useStoreState, useStoreActions, action } from 'easy-peasy';

const NewPost = () => {

    /* const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const { posts, setPosts} = useContext(DataContext); */
    const navigate = useNavigate();

    const posts = useStoreState((state) => state.posts);
    const postTitle = useStoreState((state) => state.postTitle);
    const postBody = useStoreState((state) => state.postBody);

    const savePost = useStoreActions((actions) => actions.savePost);
    const setPostTitle = useStoreActions((actions) => actions.setPostTitle);
    const setPostBody = useStoreActions((actions) => actions.setPostBody);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const newPost = {id, title: postTitle, datetime, body: postBody};
        savePost(newPost);
        navigate('/');

        /* try {
            const response = await api.post('/posts', newPost);
            const allPosts = [...posts, response.data];
            setPosts(allPosts);
            setPostTitle('');
            setPostBody('');
            navigate('/');
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }     */
    }
  return (    
    <main className='NewPost'><h1>New Post</h1>
        <form action="" className="newPostForm" onSubmit={handleSubmit}>
            <label htmlFor="postTitle">Title:</label>
            <input 
                id="postTitle"
                type="text"
                required
                value={postTitle}
                onChange={(e)=>setPostTitle(e.target.value)}
            />
            <label htmlFor="postBody">Post:</label>
            <textarea 
                id="postBody" cols="30" rows="10"
                required
                value={postBody}
                onChange={(e)=>setPostBody(e.target.value)}
            />
            <button type='sumbit'>Submit</button>
        </form>
    </main>
  )
}

export default NewPost