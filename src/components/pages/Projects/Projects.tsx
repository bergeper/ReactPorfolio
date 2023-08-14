import { Link } from "react-router-dom";
import { StyledProjectContainer } from "../../styled/Projects/StyledProjectContainer";
import { StyledPageHeading } from "../../styled/StyledPageHeading";
import { projects } from "../../../services/projects";
import { StyledImgLink } from "../../styled/Projects/StyledImgLink";

export const Projects = () => {
  const html = projects.map((pro) => (
    <Link to={"" + pro.id}>
      <StyledImgLink src={pro.imgLink}></StyledImgLink>
    </Link>
  ));

  return (
    <>
      <StyledPageHeading>Projects work</StyledPageHeading>
      <StyledProjectContainer>{html}</StyledProjectContainer>
    </>
  );
};
