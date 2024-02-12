import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/(pages)/home/Hero'
import Components from '@/components/(pages)/home/Component'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Components />
      </main>
      <Footer />

    </>
  );
}
