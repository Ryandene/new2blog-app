const addBlog = (blog) => {
    return {
        type: 'ADD_BLOG',
        payload: blog,
    };
};

const deleteBlog = (id) => {
    return {
        type: 'DELETE_BLOG',
        payload: id,
    };
};

const updateBlog = (blog) => {
    return {
        type: 'UPDATE_BLOG',
        payload: blog,
    };
};

export { addBlog, deleteBlog, updateBlog };