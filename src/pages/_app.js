import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "@styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import store from "store";
import { StoreProvider } from "easy-peasy";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const getLayout = Component.getLayout || ((page) => page);

  const content = <Component {...pageProps} />;

  return (
    <StoreProvider store={store}>
      <SessionProvider session={session}>
        <>
          <ToastContainer position="top-right" autoClose={3000} />
          {getLayout(content)}
        </>
      </SessionProvider>
    </StoreProvider>
  );
}

export default MyApp;
