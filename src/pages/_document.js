import Document, { Head, Html, Main, NextScript } from "next/document";

class AppDocument extends Document {
  static async getInitialProps(context) {
    const originalRenderPage = context.renderPage;

    context.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => App,
        enhanceComponent: (Component) => Component,
      });

    const initialProps = await Document.getInitialProps(context);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>ShipTech - Icon</title>
        </Head>
        <body className="bg-p_back">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
