import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/(pages)/home/Hero'
import Components from '@/components/(pages)/home/Component'
import Tech from '@/components/(pages)/home/Tech'
import Works from '@/components/(pages)/home/works'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Tech />
        <Works />
        {/* <Components /> */}
      </main>
      {/* <Footer /> */}

    </>
  );
}
