import { BreadcrumbButton } from "./BreadcrumbButton.tsx";
import { usePageList } from "../../../provider/pageListProvider";
import { BreadcrumbArrow } from "./BreadcrumbArrow";

const BREADCRUMB_MAX_COUNT = 5;

export const Breadcrumb = () => {
  const { pageList, popPage } = usePageList();
  const pageCount = pageList.length;
  const shownIdx = pageCount - BREADCRUMB_MAX_COUNT;

  if (pageCount > BREADCRUMB_MAX_COUNT) {
    const basedIndex = pageCount - BREADCRUMB_MAX_COUNT;
    return [
      <BreadcrumbButton onClick={() => popPage(shownIdx)}>
        ...
      </BreadcrumbButton>,
      pageList
        .filter((_: string, index: number) => index >= shownIdx)
        .map((page: string, idx: number) => (
          <>
            <BreadcrumbArrow />
            <BreadcrumbButton
              onClick={() => popPage(basedIndex + idx + 1)}
              key={idx}
            >
              {page}
            </BreadcrumbButton>
          </>
        )),
    ];
  }
  return pageList.map((page: string, idx: number) => (
    <>
      <BreadcrumbButton onClick={() => popPage(idx + 1)} key={idx}>
        {page}
      </BreadcrumbButton>
      {idx !== pageCount - 1 && <BreadcrumbArrow />}
    </>
  ));
};
