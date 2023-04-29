import * as React from 'react';
import fetcher from '../../utils/fetcher';
import useSWR from 'swr'
import { useSearchParams } from 'react-router-dom';
import AnimatedLoading from '../global/AnimatedLoading';
import Post from './Post';

export interface IAppProps {
}

const PostsFeed: React.FC<IAppProps> = ({}) => { 
    
    const [routerQuery, setRouterQuery] = useSearchParams();
    const { data, error, isLoading } = useSWR(`/filter?${routerQuery}`, fetcher);
    const posts = data || [];

    if (error) {
        return <p>Error</p>
    }

    if (isLoading) {
        return <AnimatedLoading />
    }

    return <aside>
        <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
            {posts.map((post: any) => (
                <Post key={post.id} postData={post}/>
            ))}
        </div>
    </aside>
}

PostsFeed.defaultProps = {
    
}

export default PostsFeed;