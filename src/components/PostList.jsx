import React from 'react'
import PostContent from '../hooks/PostContent';
import PostItem from './PostItem'
function PostList() {
    const [posts,loading,success,failed] =PostContent();
    const hasData = posts != null && posts.length>0;

    const renderPosts=()=>{
        return posts.map(({id,author_name,author_avatar,title,content,picture}) =>(
            <PostItem key ={id} title={title} content={content} picture={picture} author_avatar={author_avatar} author_name={author_name}/>
        ))
    }

    return (
        <div className="post_list">
            {loading && <em>I'm loading, please wait...</em>}
            {failed && <em>Fetch data failed</em>}
            {success && !hasData && <em>No data to post :))</em>}
            {success && hasData && renderPosts()}
        </div>
    )
}

export default PostList
