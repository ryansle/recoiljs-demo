// Utilities
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

const MyApp = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>
  );
};
export default MyApp;
