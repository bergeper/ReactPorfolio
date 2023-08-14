import { Navigation } from "../../navigation/Navigation";

import { StyledFooter } from "../../styled/StyledFooter";

import { StyledMain } from "../../styled/StyledMain";

import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Navigation></Navigation>
      <StyledMain>
        <Outlet></Outlet>
      </StyledMain>
      <StyledFooter>Footer</StyledFooter>
    </>
  );
};
