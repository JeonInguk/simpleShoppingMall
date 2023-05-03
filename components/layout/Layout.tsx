import Navbar from "./Navbar";
import { ReactNode } from "react";

interface MyProps {
  children?: ReactNode;
}

export default function Layout({ children }: MyProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
