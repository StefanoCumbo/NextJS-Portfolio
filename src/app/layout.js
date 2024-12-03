import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stefano's Portfolio",
  description: "My First animated portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <ToastContainer /> 
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
