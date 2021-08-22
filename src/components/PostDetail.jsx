import useAxios from 'axios-hooks';
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import useContentDelete from '../hooks/useContentDelete';
import NavBar from './NavBar';

function PostDetail() {
    const {id} = useParams();
    const [{ data, loading, error:failed}] = useAxios(
        `articles/${id}`
      );
    const hasData = data!= null;
    const success = !loading && !failed;
    const [deletePost,{loading:dLoading,success:dSuccess,error:dError}] = useContentDelete();
    const renderPostById=() =>{
        const {createdAt,author_name,author_avatar,title,content,picture} = data;
        return (
            <div className="post-detail-wrapper">
                <img src={picture} alt =""/>
                <h3 >{title}</h3>
                <div className="post-detail-author">
                    <img  src={author_avatar} alt=""/>
                    <h4><i>write by </i>{author_name} | <i> at</i>  {new Date(createdAt).toLocaleString('en-US')} </h4>
                </div>
                <p>{content}</p>
            </div>
        )
    }
    return (
        <>
            <Link to={`/update/${id}`}>Update Post Content<br/></Link>
            <button onClick={()=>deletePost(id)}>Delete this post</button>
            {loading && <em>Access to post content, please wait...</em>}
            {failed && <em>Fetch data failed</em>}
            {success && !hasData && <em>No data to post</em>}
            {success && hasData && renderPostById()}

        </>
    )
}

export default PostDetail
