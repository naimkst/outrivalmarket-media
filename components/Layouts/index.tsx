import React from "react";
import { Footer } from "../Footer";
import { Navigation } from "../Navigation";

export const Layouts = ({ children }: any) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};
