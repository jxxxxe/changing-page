import { usePageList } from "../../../provider/pageListProvider";
import PageButton from "../PageButton";
import PageContainer from "../PageContainer";

const ThirdPage = () => {
  const { pushPage } = usePageList();

  return (
    <PageContainer color="lightsalmon">
      <h1>Third</h1>
      <div>
        <PageButton onClick={() => pushPage("first")}>Go First</PageButton>
        <PageButton onClick={() => pushPage("second")}>Go Second</PageButton>
      </div>
    </PageContainer>
  );
};

export default ThirdPage;
