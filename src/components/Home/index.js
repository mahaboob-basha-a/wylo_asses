import React, { useContext } from 'react'
import PostItem from '../PostItem'
import { PostsData } from '../context'
import { Link } from 'react-router-dom'
import { BiSolidAddToQueue } from "react-icons/bi";
import emptypost from '../../images/emptypost.jpg'
import './index.css'

const Home = () => {
    const {postData} = useContext(PostsData)
  return (
    <>
    <div className='home-page'>
        {postData.length > 0 ?
        <ul className='list-item'>
        {postData.map(item=>{
          const {id} = item
          return <PostItem key={id} post={item} />
        })}
        </ul>
      : <div className='no-posts'>
        <img src={emptypost} alt='no posts found' /></div>}
    </div>
      <div className='nav-bar-two'>
        <Link to='/create-post'><button className='nav-btn-two'><BiSolidAddToQueue style={{'fontSize':'32px'}} /> New Post</button></Link>
      </div>
  </>
  )
}
export default Home