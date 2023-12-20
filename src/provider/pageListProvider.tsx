import { PropsWithChildren, createContext, useContext } from "react";
import useLocalStorage from "../storage/useLocalStorage";

type PageListContextValues = {
  pageList: string[];
  pushPage: (page: string) => void;
  popPage: (idx?: number) => void;
};

const PageListContext = createContext<PageListContextValues>({
  pageList: [],
  pushPage: () => {},
  popPage: () => {},
});

export const PageListProvider = ({ children }: PropsWithChildren) => {
  const [pageList, setPageList] = useLocalStorage("pageList", ["first"]);

  const pushPage = (page: string) => {
    setPageList([...pageList, page]);
  };

  const popPage = (idx = -1) => {
    if (pageList.length < 1) return;
    const newPageList = pageList.slice(0, idx);
    setPageList(newPageList);
  };

  return (
    <PageListContext.Provider value={{ pageList, pushPage, popPage }}>
      {children}
    </PageListContext.Provider>
  );
};

export const usePageList = () => useContext(PageListContext);
