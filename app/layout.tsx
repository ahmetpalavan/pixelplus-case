"use client";

import { ModalProvider } from "@/provider/ModalProvider";
import { QueryProvider } from "@/provider/QueryProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <ModalProvider />
          {children}
          <ToastContainer />
        </QueryProvider>
      </body>
    </html>
  );
}
