import FirstPage from "./components/Page/Pages/FirstPage";
import SecondPage from "./components/Page/Pages/SecondPage";
import ThirdPage from "./components/Page/Pages/ThirdPage";
import styled from "@emotion/styled";
import { Breadcrumb, Header, BackButton } from "./components/Header";
import { usePageList } from "./provider/pageListProvider.tsx";

const PageView = styled.div`
  height: 100%;
  background-color: white;
  position: relative;
`;

const PageWrapper = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotateX(90deg);
  transition: transform 1s ease;

  &:last-child {
    animation-duration: 1s;
    animation-name: "move";
    transform: rotateX(0deg);
  }
`;

const BreadcrumbContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

function App() {
  const { pageList, popPage } = usePageList();

  return (
    <>
      <Header>
        {pageList.length > 1 && (
          <BackButton onClick={() => popPage()}>뒤로가기</BackButton>
        )}
        <BreadcrumbContainer>
          <Breadcrumb />
        </BreadcrumbContainer>
      </Header>
      <PageView>
        {pageList.map((page, index) => (
          <PageWrapper key={`page-${index}`}>
            {page === "first" && <FirstPage />}
            {page === "second" && <SecondPage />}
            {page === "third" && <ThirdPage />}
          </PageWrapper>
        ))}
      </PageView>
    </>
  );
}

export default App;
