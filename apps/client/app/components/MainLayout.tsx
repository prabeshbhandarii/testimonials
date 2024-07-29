import type { Metadata } from "next";
import Header from "./Header";
import Footer from "./Footer";

export const metadata: Metadata = {
    title: "feedback taking app",
    description: "testimonial feedback taking app, easy to follow",
  };
  

export default function MainLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
      <>
        <Header />
          <div>{children}</div>
        <Footer />
      </>
    )
}