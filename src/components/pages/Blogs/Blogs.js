import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import './style.scss';
import { HeaderMemo } from '../../../components/Header/Header';
import CallService from "../../../util/CallService";
import { BlogMenu } from '../../BlogMenu/BlogMenu';
import { BlogContent } from '../../BlogContent/BlogContent';

export default function Blogs(props) {

    const category = "Blogs";

    const params = props.match.params.category;
    const pathId = props.match.params.id;

    const [fetchData, setFetchData] = useState({});
    const [isCategory, setCategory] = useState(params ? '/' + params : '');
    const [page, setPage] = useState(1);
    const [selectPage, setSelectPage] = useState(0);
    const [isLoadingBlogs, setLoadingBlogs] = useState(0);
    const [isLoadingBlog, setLoadingBlog] = useState(0);

    useEffect(() => {
        if (params) {
            setCategory('/' + params);
        } else {
            setCategory('');
        }
        setSelectPage(0);
        setPage(1);
    }, [params]);




    useEffect(() => {
        let mounted = true;
        setLoadingBlogs(1);
        if (mounted && (params === undefined || params === 'remedy_recipies' || params === 'news')) {
            CallService.get(`/blogs${isCategory}/${page}`)
                .then(data => {
                    setFetchData({ ...data });
                    setLoadingBlogs(0);
                }).catch(err => {
                    console.error(err);
                });
        }
        return () => mounted = false;
    }, [isCategory, page]);

    useEffect(() => {
        setLoadingBlog(1);
        if (pathId && pathId !== 'remedy_recipies' && pathId !== 'news') {
            CallService.get(`/blog/${pathId}`)
                .then(data => {
                    setFetchData({ ...data });
                    setLoadingBlog(0);
                }).catch(err => {
                    console.error(err);
                });
        }
    }, []);

    const handleClick = (id) => {
        setLoadingBlog(1);
        CallService.get(`/blog/${id}`)
            .then(data => {
                setFetchData({ ...data });
                setLoadingBlog(0);
            }).catch(err => {
                console.error(err);
            });
    };

    const { blogs, blog, recent_posts, count } = fetchData;



    let pageCount = 0;
    const perPage = 10;
    pageCount = Math.ceil(count / perPage);

    const onChangePage = i => {
        setSelectPage(i.selected);
        setPage(i.selected + 1);
    };


    return (
        <> <HeaderMemo category={category} type={(props.match.params.id && blog && blog.title) || params} />
            <div className="blog-container">
                <div className="wrapper">
                    <BlogMenu
                        params={params}
                        recent_posts={recent_posts}
                        handleClick={handleClick}
                    />
                    <BlogContent
                        params={props.match}
                        handleClick={handleClick}
                        isLoadingBlog={isLoadingBlog}
                        isLoadingBlogs={isLoadingBlogs}
                        blogs={blogs}
                        blog={blog}
                    />
                </div>
                {count > 10 &&
                    <div className="text-xs-center">
                        {!blog && <ReactPaginate
                            onPageChange={(i) => onChangePage(i)}
                            pageCount={pageCount}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={1}
                            disableInitialCallback={true}
                            forcePage={selectPage}
                        />}
                    </div>
                }
            </div>
        </>
    );
}
