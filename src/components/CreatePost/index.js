import React,{useContext, useState} from 'react'
import {v4 as uuid} from 'uuid'
import { PostsData } from '../context'
import { useNavigate } from 'react-router-dom'
import { TiHomeOutline } from "react-icons/ti";
import './index.css'
const CreatePost = () => {
  const {addItem,editData,editItem,changeStatus,editStatus,setEditItem} = useContext(PostsData)
  const [title,setTitle] = useState(editData.title ? editData.title : '')
  const [description,setDesctription] = useState(editData.description ? editData.description : '')
  const [errorMsgt,setErrormsgt] = useState('')
  const [errorMsgd,setErrormsgd] = useState('')
  const [titleErr,settitleErr] = useState(false)
  const [descErr,setdescErr] = useState(false)
  const navigate = useNavigate()
  const addPost = e =>{
    e.preventDefault()
    if (title === '' && description === '' ){
        setErrormsgt('* Title not empty')
        settitleErr(true)
        setErrormsgd('* Description not empty')
        setdescErr(true)
    }else if (title === ''){
      setErrormsgt('* Title not empty')
      settitleErr(true)
      setErrormsgd('')
      setdescErr(false)
    }else if (description === ''){
        setErrormsgt('')
        settitleErr(false)
        setErrormsgd('* Description not empty')
        setdescErr(true)
    }else{
      const newPostData = {
        id:uuid(),
        title,description
      }
        navigate('/')
        addItem(newPostData)
        setErrormsgt('')
        settitleErr(false)
        setErrormsgd('')
        setdescErr(false)
        setTitle('')
        setDesctription('')
    }
  }
  const editPost = e =>{
    e.preventDefault()
    if (title === '' && description === '' ){
        setErrormsgt('* Title not empty')
        settitleErr(true)
        setErrormsgd('* Description not empty')
        setdescErr(true)
    }else if (title === ''){
      setErrormsgt('* Title not empty')
      settitleErr(true)
      setErrormsgd('')
      setdescErr(false)
    }else if (description === ''){
      setErrormsgt('')
        settitleErr(false)
        setErrormsgd('* Description not empty')
        setdescErr(true)
    }else{
        const newEditItem = {
          id:editData.id,
          title,description
        }
        navigate('/')
        editItem(newEditItem)
        setEditItem({})
        changeStatus(false)
        setErrormsgt('')
        settitleErr(false)
        setErrormsgd('')
        setdescErr(false)
        setTitle('')
        setDesctription('')
    }
  }
  const onHome =()=>{
    changeStatus(false)
    setEditItem({})
    navigate('/')
  }
  return (
    <>
      <div className='post-page'>
        <div className='post-card'>
          <form>
            <label htmlFor='title'>Title</label>
            <input required onChange={e=> setTitle(e.target.value)} value={title} placeholder='Title here...' type='text' id='title' />
            <span className={ titleErr ? 'error':'noterror'}>{errorMsgt}</span>
            <label htmlFor='description'>Description</label>
            <textarea required onChange={e=>setDesctription(e.target.value)} value={description} className='description-inpt' placeholder='Description here...' type='text' id='description' />
            <span className={ descErr ? 'error':'noterror'}>{errorMsgd}</span>
            {editStatus ? 
            <button onClick={editPost} type='submit' className='post-btn'>Edit Post</button>
             : <button onClick={addPost} type='submit' className='post-btn'>Add Post</button>
             }
          </form>
        </div>
        <div className='nav-bar-home'>
        <button onClick={onHome} className='nav-btn'><TiHomeOutline style={{'fontSize':'32px'}} /> Posts</button>
      </div>
      </div>
    </>
  )
}
export default CreatePost