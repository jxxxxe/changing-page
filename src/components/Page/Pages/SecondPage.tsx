import { usePageList } from "../../../provider/pageListProvider";
import PageButton from "../PageButton";
import PageContainer from "../PageContainer";

const SecondPage = () => {
  const { pushPage } = usePageList();

  return (
    <PageContainer color="plum">
      <h1>Second</h1>
      <div>
        <PageButton onClick={() => pushPage("first")}>Go First</PageButton>
        <PageButton onClick={() => pushPage("third")}>Go Third</PageButton>
      </div>
    </PageContainer>
  );
};

export default SecondPage;
