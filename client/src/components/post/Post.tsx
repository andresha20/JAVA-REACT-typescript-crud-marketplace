import * as React from 'react';

export interface IAppProps {
    postData?: object,
}

const Post: React.FunctionComponent<IAppProps> = ({ postData }) => <aside>
    <p>Test</p>
</aside>

Post.defaultProps = {
    
}

export default Post;