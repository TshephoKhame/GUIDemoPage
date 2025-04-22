// import { Html, Head, Main, NextScript } from "next/document";

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head />
//       <body className="antialiased body">
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Add viewport meta tag here */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="antialiased body">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}