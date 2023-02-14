import Head from "next/head";
import React from "react";

export const Seo = () => {
  return (
    <div>
      <Head>
        <title>
          Aura Delices | Kkosher Chocolate Store Montreal | Artisan Chocolate
        </title>
        <meta
          name="description"
          content="Aura Delice's is a boutique kosher chocolatier, creating chocolates accompanied by a delicious aura, finished with exotic colors and filled with yumminess | Your favorite Outremont local chocolate and candy store"
          key="desc"
        />
        <meta
          property="og:title"
          content="Aura Delices | Kkosher Chocolate Store Montreal | Artisan Chocolate"
        />
        <meta
          property="og:description"
          content="Aura Delice's is a boutique kosher chocolatier, creating chocolates accompanied by a delicious aura, finished with exotic colors and filled with yumminess | Your favorite Outremont local chocolate and candy store"
        />
        <meta property="og:image" content="/assets/images/logo.svg" />
      </Head>
    </div>
  );
};
