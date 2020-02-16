import React from 'react';
import Head from 'next/head';


export default props => (
  <div>
    <Head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
    </Head>
    <style jsx global>{`
      body {
        background-color: #efefef;
        margin: 0;
        padding: 0;
      }
    `}</style>
    {props.children}
  </div>
);
