import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export function BlogMenu({ recent_posts, params, handleClick }) {


    return (
        <aside className="column">
            <h1 style={{ textTransform: 'capitalize' }}>{params ? params.replace(/_/g, " ") : 'Blog'}</h1>
            <h4>CATEGORIES</h4>
            <Link to="/blogs/news" >News</Link>
            <Link to="/blogs/remedy_recipies" >Remedy Recipes</Link>
            <h4>RECENT POSTS</h4>
            {recent_posts && recent_posts.map(el => (
                <Link to={`/blog/${el.id}`} key={el.id}
                    onClick={(id) => handleClick(el.id)}> {el.title}</Link>
            ))}
        </aside>
    );
}
