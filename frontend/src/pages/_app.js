import '@/styles/globals.css';
import Head from 'next/head';
import Layout from './layout/Layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <QueryClientProvider client={queryClient}>

        <Head>

          <title>Cafes-In-Town</title>
          {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-ENQLLF2JQ3"></Script>
         
          <Script>
            {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ENQLLF2JQ3', {page_path: window.location.pathname});`}
          </Script> */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-ENQLLF2JQ3"></script>
          <script>
            { `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ENQLLF2JQ3');`}
</script>
        </Head>

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  );
}
