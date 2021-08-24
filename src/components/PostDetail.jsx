import useAxios from 'axios-hooks';
import React from 'react'
import { Link, useParams } from 'react-router-dom'

function PostDetail() {
    const {id} = useParams();
    const [{ data, loading, error:failed}] = useAxios(
        `articles/${id}`
      );
    const hasData = data!= null;
    const success = !loading && !failed;

    const [{ loading: dLoading, error: dError,response:dResponse}, deletePost] = useAxios(
    {
      url: `articles/${id}`,
      method: "DELETE",
    },
    { manual: true }
  );
    const dSuccess = dResponse && dResponse.status ==20;
    const renderPostById=() =>{
        const {createdAt,author_name,author_avatar,title,content,picture} = data;
        return (
            <div className="post-detail-wrapper">
                {/* <img src={picture} alt =""/> */}
                <div className ="img-bg" style={{ backgroundImage: `url(${picture})` }}>
                    
                </div>
                <h3 className="post-detail-title" >{title}</h3>
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
            
            {loading && <em>Access to post content, please wait...</em>}
            {failed && <em>Fetch data failed</em>}
            {success && !hasData && <em>No data to post</em>}
            {success && hasData && renderPostById()}
            <div className="footer">
                <Link to={`/update/${id}`} className="fas fa-pen update-btn"><br/></Link>
                <button className="fas fa-trash delete-btn" onClick={()=>deletePost()}></button>
            </div>
           
        </>
    )
}

export default PostDetail
