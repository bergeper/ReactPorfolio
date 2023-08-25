import { Link } from "react-router-dom";
import { StyledContainer } from "../../styled/Content/StyledContainer";
import {
  StyledContentTitle,
  StyledContentDesc,
} from "../../styled/Content/StyledContent";
import { StyledSection } from "../../styled/StyledSection";

export const Home = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <StyledSection>
        <StyledContainer>
          <StyledContentTitle id="shortprojects">
            Short and Sweet: Projects
          </StyledContentTitle>
          <StyledContentDesc>
            As a student in school, I have taken advantage of the opportunities
            to work on various web application projects. These projects provided
            hands-on experience in using HTML, CSS, JavaScript, and frameworks
            like React. I applied the knowledge I gained in class to create
            functional and hopefully visually appealing web pages. These
            projects not only helped me improve my web development skills, but
            also gave me the chance to collaborate with classmates and develop
            my teamwork and problem-solving abilities.
            <Link to="/projects" className="linkToPage" onClick={handleClick}>
              Check out my projects
            </Link>
          </StyledContentDesc>
        </StyledContainer>
        <StyledContainer>
          <StyledContentTitle id="shortme">
            Short and Sweet: About
          </StyledContentTitle>
          <StyledContentDesc>
            Hello, I'm Per, a student in the Frontend Developer program at
            Medieinstitutet in Stockholm. I have gained a strong foundation in
            HTML, CSS(and SCSS), and JavaScript(and TypeScript), and various
            frameworks like React and Vue. I am currently seeking an internship
            to gain practical experience and enhance my skills in the field. I
            am eager to learn from industry professionals and contribute to
            real-world projects. Let's connect to discuss how I can add value to
            your team.
            <Link to="/about" className="linkToPage" onClick={handleClick}>
              Read more about me
            </Link>
          </StyledContentDesc>
        </StyledContainer>
      </StyledSection>
    </>
  );
};
