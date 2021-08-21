import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className="nav-bar">
            <h2>LI'FE Articles</h2>
            <Link to="/create">Create New Post</Link>
        </div>
    )
}

export default NavBar
