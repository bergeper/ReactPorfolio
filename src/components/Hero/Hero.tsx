import logo from '../../assets/CompPurp.png';
import { HeroImg } from '../styled/HeroImg';
export const Hero = () => {
  return (
    <>
      <article>
        <h1>Hi, I am</h1>
        <h1>Per Berge</h1>
        <h1>Front-End Developer</h1>
      </article>
      <HeroImg src={logo}></HeroImg>
    </>
  );
};
