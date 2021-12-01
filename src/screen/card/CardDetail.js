import React, { useEffect, useState } from 'react'
import { Card } from 'antd';
import { useParams } from 'react-router';
import Loader from '../../components/loader/Loader';

export default function CardDetail(props) {
    // const postId = props.match.params.id;
    const { id } = useParams()
    console.log(id)
    const [loader, setLoader] = useState(true)
    const [post, setPost] = useState([]);
    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = await response.json();
        if (data) {
            setPost(data)
            setLoader(false)
        }
    }
    if (post) {
        console.log(post)
    }
    useEffect(() => {
        fetchData()

    }, [id])

    return(
        <div>
        {loader?<Loader></Loader>:(
            <Card size="default" title={post.title} style={{ width: "90%",height:'70vh', marginLeft: 'auto', marginRight: 'auto' }}>
            {post.body}
           
        </Card>
        )}
        </div>
    )
        
}
