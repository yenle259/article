import useAxios from "axios-hooks";
import React, { useState } from "react";
import PostItem from "./PostItem";
function PostList() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState();
  const [{ data, loading, error: failed }] = useAxios({
    url: "articles",
    params: {
      page,
      search,
      limit: 8,
    },
  });
  const success = !loading && !failed;
  const hasData = data != null && data.length > 0;
  const renderPosts = () => {
    return data.map(
      ({ id, author_name, author_avatar, title, content, picture }) => (
        <PostItem
          key={id}
          id={id}
          title={title}
          content={content}
          picture={picture}
          author_avatar={author_avatar}
          author_name={author_name}
        />
      )
    );
  };
  const handlePrev = () => {
    if (page === 1) return;
    setPage(page - 1);
  };
  const handleNext = () => {
    if (!hasData) return;
    setPage(page + 1);
  };

  const handleSearchChange = (e) => {
    setPage(1);
    setSearch(e.target.value);
  };

  return (
    <div className="body-page">
      <div className="search-class">
        <input
          className="searching"
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
      
      </div>

      <div className="post_list">
        {loading && <em>Loading, please wait a minute...</em>}
        {failed && <em>Fetch data failed</em>}
        {success && !hasData && <em>No data to post</em>}
        {success && hasData && renderPosts()}
      </div>
      <div className="footer" >
        <button className="fas fa-arrow-left btn" onClick={handlePrev}></button>
        <button className="page-number">{page}</button>
        <button className="fas fa-arrow-right btn" onClick={handleNext}></button>
      </div>
    </div>
  );
}

export default PostList;
