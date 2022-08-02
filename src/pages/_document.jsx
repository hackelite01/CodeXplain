import Document, { Html, Head, Main, NextScript } from 'next/document';

class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <title>CodeXplain - Code explained by AI.</title>
          <link href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=optional' rel='stylesheet' />
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />

          <link rel='shortcut icon' href='/favicon.ico' />

          <meta title='CodeXplain - Code explained by AI.' />

          <meta charSet='utf-8' />
          <meta name='description' content='Understand code in seconds - powered by AI.' />

          <meta property='og:url' content={process.env.NEXT_PUBLIC_VERCEL_URL} />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='CodeMate - code explained' />
          <meta property='og:description' content='Understand code quicker. Get coding faster.' />
          <meta property='og:site_name' content='CodeAi' />
          <meta property='og:image' content='https://i.ibb.co/FxKj9R6/codemateogimage.png' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@hackelite01' />
          <meta name='twitter:title' content='CodeXplain - code explained.' />
          <meta name='twitter:description' content='Understand code in seconds - powered by AI.' />
          <meta name='twitter:image' content='https://i.ibb.co/FxKj9R6/codemateogimage.png' />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
