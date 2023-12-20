import PageButton from "../PageButton";
import PageContainer from "../PageContainer";

type Props = {
  onClick: (pageName: string) => void;
};

const First = ({ onClick }: Props) => {
  return (
    <PageContainer color="skyblue">
      <h1>First</h1>
      <div>
        <PageButton onClick={() => onClick("second")}>Go Second</PageButton>
        <PageButton onClick={() => onClick("third")}>Go Third</PageButton>
      </div>
    </PageContainer>
  );
};

export default First;
