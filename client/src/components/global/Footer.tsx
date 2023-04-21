import * as React from 'react';

export interface IAppProps {
    color?: string,
}

const Footer: React.FunctionComponent<IAppProps> = ({ color }) => <aside>
    <div className='bg-gray-900 p-5 md:p-16'>
        <div className='grid grid-cols-3 gap-5'>
            <div>
                <img src='/images/logo.png' className='rounded' height={10} width={150}/>
            </div>
        </div>
    </div>
</aside>

Footer.defaultProps = {
    
}

export default Footer;