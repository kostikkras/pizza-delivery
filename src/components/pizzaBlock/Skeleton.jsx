import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}>
        <circle cx="114" cy="124" r="86" />
        <rect x="17" y="226" rx="0" ry="0" width="202" height="32" />
        <rect x="16" y="276" rx="0" ry="0" width="208" height="70" />
        <rect x="22" y="370" rx="0" ry="0" width="95" height="20" />
        <rect x="130" y="366" rx="0" ry="0" width="92" height="36" />
    </ContentLoader>
);

export default Skeleton;
