import * as React from 'react'
import { Link, } from 'gatsby'

import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
} from './layout.module.css'
import useSiteMetadata from '../utils/graphql-hooks/useSiteMetadata'

type LayoutProps = {
    pageTitle: string;
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
    const metadata = useSiteMetadata();
    return (
        <div className={container}>
            <header className={siteTitle}>{metadata.title}</header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>Home</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>About</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/blog" className={navLinkText}>Posts</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/gallery" className={navLinkText}>Gallery</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    );
}

export default Layout;