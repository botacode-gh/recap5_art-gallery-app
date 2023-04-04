import { SWRConfig } from "swr";
import GlobalStyle from "../styles";

// fetch API using async
const fetcher = async (URL) => {
  const response = await fetch(URL);

  // throw error if status code is in range 200–299
  if (!response.ok) {
    const error = new Error("I got an error while fetching the data.. :/");
    // give the error object some extra info
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  return response.json();
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
