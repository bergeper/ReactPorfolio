import { About } from '../About/About';
import { Contact } from '../Contact/Contact';
import { Navbar } from '../Navigation/Navbar';
import { Projects } from '../Projects/Projects';

export const Layout = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </main>
      <footer></footer>
    </>
  );
};
