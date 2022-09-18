import '../style/login.css'
import '../style/index.css'
import '../style/home.css'
import '../style/showSupply.css'
import 'bootstrap/dist/css/bootstrap.css'; // Add this line

import Script from 'next/script';
import Head from 'next/head';

function MyApp({Component, pageProps}){
    return(
        <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
  
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossOrigin="anonymous"
        />
        <Component {...pageProps} />
      </>
    )
}
export default MyApp