import React, { useContext } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { PostsData } from '../context';
import './index.css'
import { Link } from 'react-router-dom';
export default function PostItem(prop) {
    const {post} = prop
    const {id,title,description} = post
    const {setEditItem,deleteItem,changeStatus} = useContext(PostsData)
    const detelePost = ()=>{
        deleteItem(id)
    }
    const editListItem = ()=>{
      changeStatus(true)
      setEditItem(post)
    }
  return (
    <div className='post-item-card'>
        <h1 className='post-item-card-title'>{title}</h1>
        <p className='post-item-card-description'>{description}</p>
        <div className='btn-container'>
        <Link to='/create-post'><button onClick={editListItem} className='edit-btn'><FaEdit style={{'fontSize':'16px'}} /> Edit Post</button></Link>
            <button onClick={detelePost} className='delete-btn'><MdDeleteForever style={{'fontSize':'20px'}} /> Delete Post</button>
        </div>
    </div>
  )
}
