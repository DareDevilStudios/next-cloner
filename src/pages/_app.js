import '../styles/globals.css';
import React from "react";
import { AnimatePresence } from "framer-motion";

const App = ({ Component, pageProps }) => {
  return (
    <AnimatePresence>
      <Component {...pageProps} />
    </AnimatePresence>
  );
};

export default App;
