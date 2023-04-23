import * as React from 'react';

export interface IAppProps {
    color?: string,
}

const AnimatedLoading: React.FunctionComponent<IAppProps> = ({ color }) => <aside>
    <div className={`flex w-full items-center justify-center`}>
        <div className={`mx-auto animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary-default`}></div>
    </div>
</aside>

AnimatedLoading.defaultProps = {
    
}

export default AnimatedLoading;