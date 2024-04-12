import * as React from 'react'

import useSiteMetadata from '../utils/graphql-hooks/useSiteMetadata';

const Seo: React.FC<{title: string}> = ({ title }) => {
    const metadata = useSiteMetadata();
    return (
        <title>{title} | {metadata.title}</title>
    );
}

export default Seo