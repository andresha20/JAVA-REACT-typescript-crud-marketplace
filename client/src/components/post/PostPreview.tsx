import * as React from 'react';

export interface IAppProps {
    postData?: object,
}

const PostPreview: React.FC<IAppProps> = ({ postData }) => <aside>
    <p>Test</p>
</aside>

PostPreview.defaultProps = {
    
}

export default PostPreview;