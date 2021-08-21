import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useContentById from "../hooks/useContentById";
import useContentCreate from "../hooks/useContentCreate";
import useContentUpdate from "../hooks/useContentUpdate";

function PostForm() {
  const {id} = useParams();
  const [postData, postDataLoading, postDataSuccess, postDataError] = useContentById(id);
  
  const [formData, setFormData] = useState({});
  const [createPost, { loading:cLoading, success:cSuccess, error:cError }] = useContentCreate();
  const [updatePost,{loading:uLoading,success:uSuccess,error:uError}] = useContentUpdate();
  const isUpdate = !!id;
  const isReady = !isUpdate || (postDataSuccess && postData);
  const handleChange = (field) => (event) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(isUpdate){
      updatePost(id,formData);
    }else{
      createPost(formData);
    }
  };

  useEffect(() => {
    if (cSuccess !=true) return;
    setFormData({});
  }, [cSuccess]);

  useEffect(() => {
    if(!isUpdate) {
      setFormData({});
    };
  }, [id])

  useEffect(() => {
    if(!isReady && !isUpdate) return;
    const {title, picture,content,author_name, author_avatar} = postData || {};
    setFormData({title,picture,content,author_name,author_avatar});
  }, [isReady])
 
  return (
    <div>
      {cLoading && <em>Creating new post, please wait a min...</em>}
      {cError && <em>Error, please try again</em>}
      {cSuccess && <em>New post is created successfully</em>}

      {uLoading && <em>Updating post...</em>}
      {uError && <em>Cannot update post, please try again</em>}
      {uSuccess && <em>Updated successfully.</em>}

      {!isReady && postDataLoading && <em>Data loading...</em>}
      {!isReady && postDataError && <em>Error, Cannot access to data</em>}
      {!isReady && postDataSuccess && !postData && <em>Data is empty</em>}
      {isReady &&  (
        <form onSubmit={handleSubmit}>
          <h3>Create New Post</h3>
          <div>
            <label htmlFor="">Title of the post</label>
            <input
              value={formData["title"] || ""}
              onChange={handleChange("title")}
              id="post_title"
              type="text"
              name="title"
              placeholder="Enter title of the post"
            />
          </div>
          <div>
            <label htmlFor="">Add Image URL </label>
            <input
              value={formData["picture"] || ""}
              onChange={handleChange("picture")}
              type="text"
              name="picture"
              placeholder="Add a URL"
              id="post_picture"
            />
          </div>
          <div>
            <label htmlFor="">Content of the post </label>
            <input
              value={formData["content"] || ""}
              onChange={handleChange("content")}
              type="text"
              name="content"
              placeholder="Enter content"
              id="post_content"
            />
          </div>
          <div>
            <label htmlFor="">Author Name</label>
            <input
              value={formData["author_name"] || ""}
              onChange={handleChange("author_name")}
              type="text"
              name="author_name"
              placeholder="Enter name of author"
              id="post_authorname"
            />
          </div>
          <div>
            <label htmlFor="">Avatar of author</label>
            <input
              value={formData["author_avatar"] || ""}
              onChange={handleChange("author_avatar")}
              type="text"
              name="author_avatar"
              placeholder="Add a URL"
              id="post_authoravatar"
            />
          </div>
          <button disabled={uLoading} type="submit">SUBMIT</button>
        </form>
      )}
    </div>
  );
}

export default PostForm;
