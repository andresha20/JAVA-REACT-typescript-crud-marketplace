import * as React from 'react';
import Button from '../global/Button';

export interface IAppProps {
    color?: string,
}

const menuItems = ['Inicio', 'Catálogo', 'Contacto']

const Navigation: React.FunctionComponent<IAppProps> = ({ color }) => <aside>
    <header>
        <nav className='bg-primary-default w-full shadow-b p-3'>
            <div className='max-w-screen-xl mx-auto flex justify-between items-center'>
                <div className='rounded-md overflow-hidden'>
                    <img src='/images/logo.png' height={10} width={150}/>
                </div>
                <div className='font-bold flex space-x-10 items-center'>
                    {menuItems.map((item, i) => (
                        <p key={i} className={`cursor-pointer hover:underline transform transition-all hover:scale-105 hover:text-${color} text-white`}>{item}</p>
                    ))}
                </div>
                <div className=''>
                    <Button color='bg-white' textColor='text-gray-900'>Publicar</Button>
                </div>
            </div>
        </nav>
    </header>
</aside>

export default Navigation;