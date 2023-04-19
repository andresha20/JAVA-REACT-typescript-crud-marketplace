import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation';

export interface MainLayout {
    children?: React.ReactNode,
    id?: string,
}

const MainLayout: React.FunctionComponent<MainLayout> = ({ id = 'sdsdsd', children }) => <aside id={id}>
    <Navigation/>
    {children || <Outlet/>}
</aside>

export default MainLayout;