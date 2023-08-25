import { Link } from "react-router-dom";
import { StyledContainer } from "../../styled/Projects/StyledContainer";
import { StyledPageHeading } from "../../styled/StyledPageHeading";
import { data } from "../../../services/projects";
import { StyledImgLink } from "../../styled/Projects/StyledImgLink";
import { useState } from "react";
import { Repo } from "../../../models/Repo";
import { StyledImgContainer } from "../../styled/Projects/StyledImgContainer";
import { StyledPageHeadingDiv } from "../../styled/StyledPageHeadingDiv";
import { StyledDesc } from "../../styled/Projects/StyledDesc";
import { StyledPageHeadingSection } from "../../styled/StyledPageHeadingSection";
import { topToScreen } from "../../../helpers/topToScreen";
import { StyledProjectLink } from "../../styled/Project/StyledProjectLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const Projects = () => {
  const [projects, setProjects] = useState<Repo[]>(data);
  const html = projects.map((pro, index) => (
    <Link to={"" + pro.id} key={index} onClick={topToScreen}>
      <StyledImgContainer>
        <StyledImgLink src={pro.imgLink}></StyledImgLink>
      </StyledImgContainer>
    </Link>
  ));

  return (
    <>
      <StyledPageHeadingSection>
        <StyledPageHeadingDiv>
          <StyledPageHeading>Projects</StyledPageHeading>
        </StyledPageHeadingDiv>
      </StyledPageHeadingSection>
      <StyledDesc>
        This is some of my school assignements. To check out other projects,
        please visit my&nbsp;
        <StyledProjectLink
          href="https://github.com/bergeper/"
          className="linkToPage"
        >
          <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          Github!
          <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
        </StyledProjectLink>
      </StyledDesc>
      <StyledContainer>{html}</StyledContainer>
    </>
  );
};
