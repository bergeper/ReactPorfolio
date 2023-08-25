import { Link, useParams } from "react-router-dom";
import { StyledPageHeading } from "../../styled/StyledPageHeading";
import { StyledPageHeadingDiv } from "../../styled/StyledPageHeadingDiv";
import { StyledPageHeadingSection } from "../../styled/StyledPageHeadingSection";
import { data } from "../../../services/projects";
import { Repo } from "../../../models/Repo";
import { topToScreen } from "../../../helpers/topToScreen";
import { StyledProjectContainer } from "../../styled/Project/StyledProjectContainer";
import { StyledProjectTitle } from "../../styled/Project/StyledProjectTitle";
import { StyledProjectContent } from "../../styled/Project/StyledProjectContent";
import { StyledProjectDesc } from "../../styled/Project/StyledProjectDesc";
import { StyledProjectLink } from "../../styled/Project/StyledProjectLink";
import { StyledProjectImg } from "../../styled/Project/StyledProjectImg";
import { StyledProjectImgMobile } from "../../styled/Project/StyledProjectImgMobile";
import { StyledProjectImgDesktop } from "../../styled/Project/StyledProjectImgDesktop";
import { MediaQueryMatchers, useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const Project = () => {
  const { id } = useParams();
  const mobileView = useMediaQuery({ maxWidth: 767 } as MediaQueryMatchers);
  const project: Repo | undefined = data.find((pro) => pro.id === id);

  const backArrow = <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>;

  return (
    <>
      <StyledPageHeadingSection>
        <StyledPageHeadingDiv>
          <StyledPageHeading>Projects</StyledPageHeading>
        </StyledPageHeadingDiv>
      </StyledPageHeadingSection>
      <StyledProjectContainer>
        <StyledProjectTitle>{project?.name}</StyledProjectTitle>
        <StyledProjectContent>
          <StyledProjectImgMobile>
            <StyledProjectImg src={project?.imgMobile}></StyledProjectImg>
          </StyledProjectImgMobile>
          {!mobileView && (
            <StyledProjectImgDesktop>
              <StyledProjectImg src={project?.imgDesktop}></StyledProjectImg>
            </StyledProjectImgDesktop>
          )}
        </StyledProjectContent>
        <StyledProjectDesc>{project?.text}</StyledProjectDesc>
        <StyledProjectLink href={project?.github} className="linkToPage">
          <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          Github!
          <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
        </StyledProjectLink>
      </StyledProjectContainer>
      <Link to="/projects" onClick={topToScreen} className="linkToPage">
        {backArrow} Back To Projects
      </Link>
    </>
  );
};
