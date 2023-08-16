import { StyledContainer } from "../../styled/Content/StyledContainer";
import { StyledContent } from "../../styled/Content/StyledContent";
import { StyledPageHeading } from "../../styled/StyledPageHeading";
import { StyledSection } from "../../styled/StyledSection";

export const Home = () => {
  return (
    <>
      <StyledSection>
        <StyledPageHeading id="test">Well this fking works</StyledPageHeading>
        <StyledContainer>
          <StyledContent>Projects</StyledContent>
          <StyledContent>Projects</StyledContent>
        </StyledContainer>
        <StyledContainer>
          <StyledContent>About</StyledContent>
          <StyledContent>About</StyledContent>
        </StyledContainer>
        <StyledContainer>
          <StyledContent>Contact</StyledContent>
          <StyledContent>Contact</StyledContent>
        </StyledContainer>
      </StyledSection>
    </>
  );
};
