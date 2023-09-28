import React from 'react';
import ContentLoader from 'react-content-loader';

const LogoSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={150}
      height={150}
      viewBox="0 0 150 150"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="8" ry="8" width="150" height="150" />
    </ContentLoader>
  );
};

export default LogoSkeleton;
