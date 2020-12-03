import React from 'react'
import { Route } from 'react-router-dom'
import loadable from "../../utils/loadable";
const AddBlogPage = loadable(import('./pages/add'));
const BlogListPage = loadable(import('./pages/list'));

// import AddBlogPage from './pages/add';
// import BlogListPage from './pages/list';

class BlogIndex extends React.Component {
    render(){
        return (
            <div>
                <p>博客管理</p>
                <Route path="/blog/list" component={BlogListPage} />
                <Route path="/blog/add" component={AddBlogPage} />
            </div>
        )
    }
}

export default BlogIndex;
