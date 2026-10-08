import Header from "@/components/Header";
import Features from "@/components/Features";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Features />
      <main className="mx-auto max-w-5xl px-5 pb-10 md:px-8">
        <Portfolio />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
