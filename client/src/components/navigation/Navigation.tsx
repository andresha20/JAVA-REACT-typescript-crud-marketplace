import * as React from 'react';

export interface IAppProps {
    color?: string,
}

const menuItems = ['Inicio', 'Catálogo', 'Contacto']

const Navigation: React.FunctionComponent<IAppProps> = ({ color }) => <aside>
    <header>
        <nav className='bg-primary-default w-full shadow-b p-3'>
            <div className='max-w-screen-md mx-auto flex justify-between items-center'>
                <div className='font-bold flex space-x-10 items-center'>
                    {menuItems.map((item, i) => (
                        <p key={i} className='text-white'>{item}</p>
                    ))}
                </div>
            </div>
        </nav>
    </header>
</aside>

export default Navigation;