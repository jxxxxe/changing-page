import PageButton from "../PageButton";
import PageContainer from "../PageContainer";

type Props = {
  onClick: (pageName: string) => void;
};

const Second = ({ onClick }: Props) => {
  return (
    <PageContainer color="plum">
      <h1>Second</h1>
      <div>
        <PageButton onClick={() => onClick("first")}>Go First</PageButton>
        <PageButton onClick={() => onClick("third")}>Go Third</PageButton>
      </div>
    </PageContainer>
  );
};

export default Second;
