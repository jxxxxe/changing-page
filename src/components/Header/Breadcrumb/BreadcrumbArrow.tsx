import styled from "@emotion/styled";

export const BreadcrumbArrowContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const BreadcrumbArrow = () => {
  return <BreadcrumbArrowContainer>{">"}</BreadcrumbArrowContainer>;
};
