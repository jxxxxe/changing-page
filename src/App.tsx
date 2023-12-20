import First from "./components/Page/Pages/FirstPage";
import Second from "./components/Page/Pages/SecondPage";
import Third from "./components/Page/Pages/ThirdPage";
import styled from "@emotion/styled";
import { Breadcrumb, Header, BackButton } from "./components/Header";
import { usePageList } from "./provider/pageListProvider.tsx";

const PageView = styled.div`
  height: 100%;
  background-color: white;
  display: flex;
`;

const BreadcrumbContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

function App() {
  const { pageList, pushPage, popPage } = usePageList();

  let currentPage = null;

  switch (pageList[pageList.length - 1]) {
    case "first":
      currentPage = <First onClick={(page) => pushPage(page)} />;
      break;
    case "second":
      currentPage = <Second onClick={(page) => pushPage(page)} />;
      break;
    case "third":
      currentPage = <Third onClick={(page) => pushPage(page)} />;
      break;
  }

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
      <PageView>{currentPage}</PageView>
    </>
  );
}

export default App;
