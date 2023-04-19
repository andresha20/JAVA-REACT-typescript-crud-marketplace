import * as React from 'react';

export interface IAppProps {
    color?: string,
}

const menuItems = ['Inicio', 'Catálogo', 'Contacto']

const Navigation: React.FunctionComponent<IAppProps> = ({ color }) => <aside>
    <div className='bg-primary-default w-full border-b border-orange-200 h-16'>
        <div>
            {menuItems.map((item, i) => (
                <p key={i}>{item}</p>
            ))}
        </div>
    </div>
</aside>

export default Navigation;