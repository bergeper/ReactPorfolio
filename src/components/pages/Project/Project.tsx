import { Link, useParams } from "react-router-dom";
import { StyledPageHeading } from "../../styled/StyledPageHeading";
import { StyledPageHeadingDiv } from "../../styled/StyledPageHeadingDiv";
import { StyledPageHeadingSection } from "../../styled/StyledPageHeadingSection";
import { data } from "../../../services/projects";
import { Repo } from "../../../models/Repo";
import { topToScreen } from "../../../helpers/topToScreen";
import { StyledProjectContainer } from "../../styled/Project/StyledProjectContainer";

export const Project = () => {
  const { id } = useParams();

  const project: Repo | undefined = data.find((pro) => pro.id === id);

  return (
    <>
      <StyledPageHeadingSection>
        <StyledPageHeadingDiv>
          <StyledPageHeading>Projects</StyledPageHeading>
        </StyledPageHeadingDiv>
      </StyledPageHeadingSection>
      <StyledProjectContainer>
        <div>
          <h2>{project?.name}</h2>
          <p>{project?.text}</p>
          <p>{project?.github}</p>
        </div>
      </StyledProjectContainer>
      <Link to="/projects" onClick={topToScreen}>
        Back To Projects
      </Link>
    </>
  );
};
