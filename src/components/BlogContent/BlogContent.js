import React from 'react';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { facebook, google, twitter, pinterest, linkedin } from '../../assets/img';
import './style.scss';



export function BlogContent({ blogs, blog, isLoadingBlogs, isLoadingBlog, handleClick, params }) {



    return (
        <>{blog ? (
            <div className="column">
                {isLoadingBlog ? <Loader
                    className='loader'
                    type="Oval"
                    color="#ae1d14"
                    height={40}
                    width={40}
                /> : <>
                        <div className="post">
                            <Link to="/blog-opened" className="title-heading">{blog && blog.title}</Link>
                            <div className="date-social-media">
                                <div className="date">Apr 17, 2019</div>
                                <div className="social-media">
                                    <Link to=''><img src={facebook} alt="facebook" /></Link>
                                    <Link to=''><img src={twitter} alt="twitter" /></Link>
                                    <Link to=''><img src={google} alt="google" /></Link>
                                    <Link to=''><img src={pinterest} alt="pinterest" /></Link>
                                    <Link to=''><img src={linkedin} alt="linkedin" /></Link>
                                </div>
                            </div>
                            <div className="main-img-container">
                                {blog && <img src={'http://liquornearme.test/storage/blogs/mainImages/' + blog.main_image} alt="main_img" />}
                            </div>
                            {parse(blog && blog.content)}
                        </div>
                    </>}
            </div>) :
            (<div className="column">
                {isLoadingBlogs ? <Loader
                    className='loader'
                    type="Oval"
                    color="#ae1d14"
                    height={40}
                    width={40}
                /> : <>
                        {blogs && blogs.map(el => (
                            <div className="post" key={el.id}>
                                <Link to="/blog-opened" className="title-heading">{el.title}</Link>
                                <div className="date-social-media">
                                    <div className="date">Apr 17, 2019</div>
                                    <div className="social-media">
                                        <Link to=''><img src={facebook} alt="facebook" /></Link>
                                        <Link to=''><img src={twitter} alt="twitter" /></Link>
                                        <Link to=''><img src={google} alt="google" /></Link>
                                        <Link to=''><img src={pinterest} alt="pinterest" /></Link>
                                        <Link to=''><img src={linkedin} alt="linkedin" /></Link>
                                    </div>
                                </div>
                                <div className="main-img-container">
                                    <img src={'http://liquornearme.test/storage/blogs/mainImages/' + el.main_image} alt="main_img" />
                                </div>
                                {parse(el.short_content)}
                                <div className="btn-wrapper" onClick={(id) => handleClick(el.id)} >
                                    <Link to={`/blog/${el.id}`}>Read More</Link>
                                </div>
                            </div>
                        ))}
                    </>}
            </div>)}</>
    );
}
