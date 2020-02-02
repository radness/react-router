import React from 'react';

const Post = ({match}) => {
    return (
        <div>
            <div>
                포스트 {match.params.id}
            </div>
            <div>
                location:pathname
            </div>
        </div>
    )
}

export default Post;