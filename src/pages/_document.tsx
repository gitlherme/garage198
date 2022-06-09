import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:wght@300;400;500;700;900&family=Playfair+Display:wght@400;500;700;900&display=swap" rel="stylesheet" />
        <meta name="title" content="Barbearia Garage 198" />
        <meta name="description" content="A Barbearia Garage198 vem com a finalidade de trazer conforto e lazer. Para isso, foi preciso fazer uma transformação em nossa garagem, que ficou espetacular! Tudo pensado para o cliente se sentir em casa. Com alguns móveis reformados, temos uma aparência vintage, que era nosso objetivo." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.garage198.com/" />
        <meta property="og:title" content="Barbearia Garage 198" />
        <meta property="og:description" content="A Barbearia Garage198 vem com a finalidade de trazer conforto e lazer. Para isso, foi preciso fazer uma transformação em nossa garagem, que ficou espetacular! Tudo pensado para o cliente se sentir em casa. Com alguns móveis reformados, temos uma aparência vintage, que era nosso objetivo." />
        <meta property="og:image" content="gallery/gallery1.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.garage198.com/" />
        <meta property="twitter:title" content="Barbearia Garage 198" />
        <meta property="twitter:description" content="A Barbearia Garage198 vem com a finalidade de trazer conforto e lazer. Para isso, foi preciso fazer uma transformação em nossa garagem, que ficou espetacular! Tudo pensado para o cliente se sentir em casa. Com alguns móveis reformados, temos uma aparência vintage, que era nosso objetivo." />
        <meta property="twitter:image" content="gallery/gallery1.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}