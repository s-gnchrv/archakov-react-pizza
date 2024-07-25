import React from "react";
import ContentLoader from "react-content-loader";

const PizzaDetailSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={700}
    height={300}
    viewBox="0 0 700 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="146" cy="146" r="146" />
    <rect x="312" y="0" rx="10" ry="10" width="158" height="30" />
    <rect x="312" y="45" rx="10" ry="10" width="388" height="45" />
    <rect x="312" y="120" rx="10" ry="10" width="388" height="90" />
    <rect x="312" y="257" rx="5" ry="5" width="90" height="27" />
    <rect x="570" y="247" rx="30" ry="30" width="130" height="44" />
  </ContentLoader>
);

export default PizzaDetailSkeleton;
