import Layout from "./layout";
import "bootstrap/dist/css/bootstrap.css";
import MainPage from "./mainPage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

library.add(fab);

function App() {
  return (
    <Layout>
      <DndProvider backend={HTML5Backend}>
        <MainPage />
      </DndProvider>
    </Layout>
  );
}

export default App;
