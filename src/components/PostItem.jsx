import React from 'react'

function PostItem({id,author_name,author_avatar,title,content,picture}) {
    return (
        <div className="inside">
           <div className="post_wrapper">
                <img className="postitem_image" src={picture} alt=""/>
                
                <h3 className="postitem_title">{title}</h3>
                <p>{content}</p>

                <div className="author">
                    <img className="author_ava" src={author_avatar} alt=""/>  
                    <h4><i>write by </i> {author_name}</h4>
                </div>
            </div> 
        </div>
        
    )
}

export default PostItem
