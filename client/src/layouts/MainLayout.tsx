import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation';

export interface MainLayout {
    children?: React.ReactNode,
}

const MainLayout: React.FunctionComponent<MainLayout> = ({ children }) => <aside>
    <Navigation/>
    {children || <Outlet/>}
</aside>

export default MainLayout;