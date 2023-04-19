import * as React from 'react';

export interface IAppProps {
    children?: React.ReactNode,
}

const MainLayout: React.FunctionComponent<IAppProps> = ({ children }) => <aside>
    {children || <></>}
</aside>

export default MainLayout;