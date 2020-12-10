import React from 'react'
import './style.scss'

export const Search = () => {
    return (
        <div className="search-container">
            <form action="">
                <input type="text" placeholder="Search entries store here..." />
                <button>Search</button>
            </form>
        </div>
    )
}
