import React from "react";
import ContentLoader from "react-content-loader";

import styles from "./Loader.module.scss";

const Loader: React.FC = () => {
  return (
    <div className={`${styles.card} p-40 mr-40 mb-40`}>
      <ContentLoader
        speed={2}
        width={138}
        height={265}
        viewBox="0 0 150 265"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="10" ry="10" width="138" height="91" />
        <rect x="0" y="110" rx="0" ry="0" width="138" height="15" />
        <rect x="0" y="135" rx="0" ry="0" width="93" height="15" />
        <rect x="0" y="160" rx="0" ry="0" width="80" height="25" />
        <rect x="114" y="154" rx="8" ry="8" width="32" height="32" />
      </ContentLoader>
    </div>
  );
};

export default Loader;
