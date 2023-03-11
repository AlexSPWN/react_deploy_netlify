//import React from 'react'
import Feed from './Feed';
/* import { useContext } from 'react';
import DataContext from './context/DataContext'; */
import { useStoreState } from 'easy-peasy';

const Home = ({isLoading, fetchError}) => {

  /* const { searchResults, fetchError, isLoading } = useContext(DataContext); */

  /* const setPosts = useStoreActions((actions) => actions.setPosts);  */
  const searchResults = useStoreState((state) => state.searchResults);

  /* const {data, fetchError, isLoading} = useAxiosFetch('http://localhost:3500/posts');

  useLayoutEffect(()=> {
    setPosts(data);
  }, [data, setPosts]); */

  return (
    <main className='Home'>
        {/* posts.length ? (
            <Feed posts={posts} />
        ): (
            <p style={{marginTop: "2rem"}}>
                No posts to display.
            </p>
        ) */}
        {isLoading && <p className='statusMsg'>Loading posts ...</p> }
        {!isLoading && fetchError && <p className = 'statusMsg' style={{color: "red"}}>{fetchError}</p>}
        {!isLoading && !fetchError && (searchResults.length ? <Feed posts={searchResults}/> : <p className='statusMsg'>No posts to display</p>)}
    </main>
  )
}

export default Home