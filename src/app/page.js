
// import Header from '../components/Header';
// import Hero from '../components/Hero';
import Head from 'next/head';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import  '../../public/styles.css';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Naman Ahuja - Portfolio</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="https://unpkg.com/remixicon/fonts/remixicon.css" />
      </Head>
      <Header/>
      <main>
        
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
