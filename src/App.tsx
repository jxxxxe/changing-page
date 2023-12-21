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
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  &:last-child {
    opacity: 1;
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
          <BackButton onClick={() => popPage()}>Back</BackButton>
        )}
        <BreadcrumbContainer>
          <Breadcrumb />
        </BreadcrumbContainer>
      </Header>
      <PageView>
        {pageList.map((page, index) => (
          <PageWrapper key={`page-${index}`} style={{ zIndex: index }}>
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
