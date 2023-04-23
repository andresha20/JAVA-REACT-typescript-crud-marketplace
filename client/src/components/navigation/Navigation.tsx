import { useLocation, useNavigate } from 'react-router-dom';
import { menuItems } from '../../utils/general';
import * as React from 'react';
import Button from '../global/Button';
export interface IAppProps {
    color?: string,
}

const Navigation: React.FunctionComponent<IAppProps> = ({ color }) => {

    const navigate = useNavigate();
    const location = useLocation();

    const redirectTo = (id: number) => {
        switch (id) {
            case 0:
                navigate(`/`)
                console.log('test')
                break;
            case 1:
                navigate(`/catalog`)
                console.log('test')
                break;
            case 2:
                navigate(`/publish`)
                console.log('test')
                break;
            default:
                break;
        }
    }

    return <aside>
        <header>
            <nav className='sticky z-20 select-none top-0 left-0 bg-primary-default w-full shadow-b p-3'>
                <div className='max-w-screen-xl mx-auto flex justify-between items-center'>
                    <div onClick={() => navigate('/')} className='cursor-pointer rounded-md overflow-hidden'>
                        <img src='/images/logo.png' height={10} width={150}/>
                    </div>
                    <div className='font-bold flex space-x-10 items-center'>
                        {menuItems.map((item, i) => (
                            <p onClick={() => redirectTo(i)} key={i} className={`text-xl cursor-pointer hover:underline transform transition-all hover:scale-105 hover:text-${color} ${location.pathname == item.name ? 'text-blue-500 border-b-4 border-blue-500' : 'text-white'}`}>{item.label}</p>
                        ))}
                    </div>
                    <div className=''>
                        <Button fn={() => redirectTo(2)} color='bg-white' textColor='text-gray-900'>Publicar</Button>
                    </div>
                </div>
            </nav>
        </header>
    </aside>
}

export default Navigation;