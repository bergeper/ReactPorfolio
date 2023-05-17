import { About } from '../About/About';
import { Contact } from '../Contact/Contact';
import { Hero } from '../Hero/Hero';
import { Navigation } from '../Navigation/Navigation';
import { Projects } from '../Projects/Projects';
import './Layout.scss';

export const Layout = () => {
  return (
    <>
      <header>
        <Navigation></Navigation>
        <Hero></Hero>
      </header>
      <main className='main--container'>
        <section className='content'>
          <Projects></Projects>
        </section>
        <section className='content'>
          <About></About>
        </section>
        <section className='content'>
          <Contact></Contact>
        </section>
      </main>
      <footer className='foot'>footer</footer>
    </>
  );
};
