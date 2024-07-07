import React,{ createContext,useState } from "react";
import {v4 as uuid} from 'uuid'
const initialPostData = [
    {
    id: uuid(),
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    description: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
    id: uuid(),
    title: "qui est esse",
    description: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
    id: uuid(),
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    description: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
    id: uuid(),
    title: "eum et est occaecati",
    description: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
    id: uuid(),
    title: "nesciunt quas odio",
    description: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
    id: uuid(),
    title: "quas odio",
    description: "veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    }]
export const PostsData = createContext()

export const PostDataProvider = (prop) => {
        const [postData,setPostData] = useState(initialPostData)

        const [editData,setEditdata] = useState({})
        const [editStatus,seteditstatus] = useState(false)

        const changeStatus = (status)=>{
            seteditstatus(status)
        }
        const setEditItem = (post)=>{
            setEditdata(post)
        }
        
        const addItem = (item)=>{
            setPostData((prev)=> [...prev,item]);
        }
        
        const editItem = (data)=>{
            const editingList = postData.map(item=>{
                if (item.id === data.id){
                    return data
                }else{
                    return item
                }
            })
            setPostData(editingList)
        }
        const deleteItem = (id)=>{
            setPostData(prev => prev.filter(e=> e.id !== id))
        }
        const {children} = prop
        return (
             <PostsData.Provider value={{changeStatus,editStatus,postData,editData,setEditItem,addItem,editItem,deleteItem}}>
                {children}
             </PostsData.Provider>
        );
}
