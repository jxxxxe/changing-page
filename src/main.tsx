import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PageListProvider } from "./provider/pageListProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <PageListProvider>
    <App />
  </PageListProvider>
);
