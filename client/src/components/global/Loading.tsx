import * as React from 'react';

export interface IAppProps {
    color?: string,
}

const Loading: React.FunctionComponent<IAppProps> = ({ color }) => <aside>
    <div className='bg-gray-900 text-white font-bold text-center flex justify-center items-center'>
      <p>Loading...</p>
    </div>
</aside>

Loading.defaultProps = {
    
}

export default Loading;