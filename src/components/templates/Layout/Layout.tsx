import React, { ReactNode } from 'react';
import { Footer, Header } from '../../molecules/index';
import './Layout.scss';

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps): JSX.Element {
    return (
        <>
            <div>
                <Header />
                <div>{children}</div>
                <Footer />
            </div>
            ;
        </>
    );
}
