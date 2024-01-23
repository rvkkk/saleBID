import React from "react";
import {Helmet} from "react-helmet";
export default function SEOWrapper({ title, description, children }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {children}
      </Helmet>
    </>
  );
}
