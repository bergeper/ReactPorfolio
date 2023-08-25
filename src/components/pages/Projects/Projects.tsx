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
        This is some of my school assignement projects. To check out other
        projects, please visit my Github!
      </StyledDesc>
      <StyledContainer>{html}</StyledContainer>
    </>
  );
};
