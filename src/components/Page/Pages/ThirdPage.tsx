import PageButton from "../PageButton";
import PageContainer from "../PageContainer";

type Props = {
  onClick: (pageName: string) => void;
};

const Third = ({ onClick }: Props) => {
  return (
    <PageContainer color="lightsalmon">
      <h1>Third</h1>
      <div>
        <PageButton onClick={() => onClick("first")}>Go First</PageButton>
        <PageButton onClick={() => onClick("second")}>Go Second</PageButton>
      </div>
    </PageContainer>
  );
};

export default Third;
