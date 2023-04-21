import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import Button from '../global/Button';

export interface IAppProps {
    color?: string,
}

const menuItems = ['Inicio', 'Catálogo']

const Navigation: React.FunctionComponent<IAppProps> = ({ color }) => {

    const redirectTo = (id: number) => {
        const navigate = useNavigate();
        switch (id) {
            case 1:
                navigate(`/`)
                break;
            case 2:
                navigate(`/catalog`)
                break;
            case 3:
                navigate(`/publish`)
                break;
            default:
                break;
        }
    }

    return <aside>
        <header>
            <nav className='sticky z-20 select-none top-0 left-0 bg-primary-default w-full shadow-b p-3'>
                <div className='max-w-screen-xl mx-auto flex justify-between items-center'>
                    <div className='rounded-md overflow-hidden h-10'>
                        <img src='/images/logo.png' height={10} width={150}/>
                    </div>
                    <div className='font-bold flex space-x-10 items-center'>
                        {menuItems.map((item, i) => (
                            <p onClick={() => redirectTo(i)} key={i} className={`cursor-pointer hover:underline transform transition-all hover:scale-105 hover:text-${color} text-white`}>{item}</p>
                        ))}
                    </div>
                    <div className=''>
                        <Button fn={() => redirectTo(3)} color='bg-white' textColor='text-gray-900'>Publicar</Button>
                    </div>
                </div>
            </nav>
        </header>
    </aside>
}

export default Navigation;