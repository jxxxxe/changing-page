import { usePageList } from "../../../provider/pageListProvider";
import PageButton from "../PageButton";
import PageContainer from "../PageContainer";

const FirstPage = () => {
  const { pushPage } = usePageList();

  return (
    <PageContainer color="skyblue">
      <h1>First</h1>
      <div>
        <PageButton onClick={() => pushPage("second")}>Go Second</PageButton>
        <PageButton onClick={() => pushPage("third")}>Go Third</PageButton>
      </div>
    </PageContainer>
  );
};

export default FirstPage;
