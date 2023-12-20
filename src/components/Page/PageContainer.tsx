import styled from "@emotion/styled";

const PageContainer = styled.div`
  background-color: ${({ color }) => color};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default PageContainer;
