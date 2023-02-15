import Head from "next/head";
import React from "react";

export const Seo = () => {
  return (
    <div>
      <Head>
        <title>
          Outrival Media | Original Content UGC Agency | Social Media Management
        </title>
        <meta
          name="description"
          content="A creative multi media agency | We create original content | UGC creators | Social Media Influencing | Local Montreal Based | Known for creating instant viral video spreading on social media"
          key="desc"
        />
        <meta
          property="og:title"
          content="Outrival Media | Original Content UGC Agency | Social Media Management"
        />
        <meta
          property="og:description"
          content="A creative multi media agency | We create original content | UGC creators | Social Media Influencing | Local Montreal Based | Known for creating instant viral video spreading on social media"
        />
        <meta property="og:image" content="/assets/images/logo.svg" />
      </Head>
    </div>
  );
};
