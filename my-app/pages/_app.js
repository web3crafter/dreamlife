import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";

const getLibrary = (provider, connector) => {
  return new Web3Provider(provider);
};
export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Component {...pageProps} />
      </Web3ReactProvider>
    </ChakraProvider>
  );
}
