import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/global/Footer';

export interface MainLayout {
    children?: React.ReactNode,
    id?: string,
}

const MainLayout: React.FunctionComponent<MainLayout> = ({ id = 'sdsdsd', children }) => <aside id={id}>
    <Navigation/>
    <div className='min-h-screen'>
        {children || <Outlet/>}
    </div>
    <Footer />
</aside>

export default MainLayout;