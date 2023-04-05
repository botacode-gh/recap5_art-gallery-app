import useSWR, { SWRConfig } from "swr";
import { useImmer } from "use-immer";
import GlobalStyle from "../styles";
import Layout from "../components/Layout";

const fetcher = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error(
      "While fetching art pieces, an error in range 200-299 has occured"
    );
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  return response.json();
};

export default function App({ Component, pageProps }) {
  const apiUrl = "https://example-apis.vercel.app/api/art";
  const { data, isLoading } = useSWR(apiUrl, fetcher);

  if (isLoading) {
    return <h1>Hold on while I fetch some art...</h1>;
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <SWRConfig value={{ fetcher }}>
          <Component {...pageProps} pieces={data} />
        </SWRConfig>
      </Layout>
    </>
  );
}
