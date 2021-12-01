import React, { useEffect, useState } from 'react'
import CardData from '../../screen/card/Card'
import "antd/dist/antd.css";
import Loader from '../loader/Loader';
// import axios from 'axios';

export default function Home() {
    const [loader,setLoader]=useState(true)
    const [post,setPost]=useState([]);
    const fetchData=async()=>{
        const response=await fetch('https://jsonplaceholder.typicode.com/posts')
        const data=await response.json();
        if(data){
            setPost(data)
            setLoader(false)
        }
    }
    if(post){
        console.log(post)
    }
    useEffect(()=>{
        fetchData()
        
    },[])
  return (
    <div>
        {loader?<Loader></Loader>:
        <div>
          
            {post.map(pst=>(
            <CardData key={pst.id} title={pst.title} body={pst.body} id={pst.id}/>
        ))}
        </div>}
    </div>
  )
}
