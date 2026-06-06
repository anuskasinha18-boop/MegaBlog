import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='post-card surface'>
            <div className='post-image-container'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='post-image' />
            </div>
            <h2 className='post-title'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard