import { useGlobal } from "reactn";
import Layout from "./layout";
import "bootstrap/dist/css/bootstrap.css";
import NewAvatar from "./newAvatar";
import AvtarList from "./avatarList";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

library.add(fab);

function App() {
  const [currentPage, setCurrentPage] = useGlobal("currentPage");
  return (
    <Layout>
      <DndProvider backend={HTML5Backend}>
        {currentPage === "new" ? <NewAvatar /> : <AvtarList />}
      </DndProvider>
    </Layout>
  );
}

export default App;
