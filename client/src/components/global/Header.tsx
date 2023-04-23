import * as React from 'react';

export interface IAppProps {
    title?: string,
}

const Header: React.FunctionComponent<IAppProps> = ({ title = 'Title' }) => {

    React.useEffect(() => {
        let mounted = true;
        if (mounted) {
            document.title = `${title} | AUTOMOTIVE`;
        }
        return () => {
            mounted = false;
        }
    }, [title]);

    return <aside></aside>
}

Header.defaultProps = {
    
}

export default Header;

