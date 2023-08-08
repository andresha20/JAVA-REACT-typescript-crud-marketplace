import * as React from 'react';

export interface IAppProps {
    color?: string,
}

const Loading: React.FunctionComponent<IAppProps> = ({ color }) => <aside>
    <div className='bg-gray-900 fixed top-0 right-0 bg-opacity-50 z-20 bottom-0 left-0 text-white font-bold text-center flex justify-center items-center'>
      <p>Loading...</p>
    </div>
</aside>

Loading.defaultProps = {
    
}

export default Loading;