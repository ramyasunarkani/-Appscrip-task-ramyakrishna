import "./globals.css";
import ReduxProvider from "./ReduxProvider";


export const metadata = {
  title: "Shop Online Now",
description: "Quality products in fashion, electronics, and lifestyle with fast delivery."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body cz-shortcut-listen="true">
        <ReduxProvider >
          {children}
        </ReduxProvider>
</body>

    </html>
  );
}
