import './globals.css';
import './Table.css'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from "next/app";
import {Provider, useDispatch} from "react-redux";
import store from "@/store/store";
import Layouts from "@/components/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {

    return(
      <Provider store={store}>
          <Layouts>
              <ChakraProvider>
                <Component {...pageProps} />
              </ChakraProvider>
          </Layouts>
      </Provider>

      )
}

export default MyApp;