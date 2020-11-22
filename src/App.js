import Layout from "./layout";
import "bootstrap/dist/css/bootstrap.css";
import MainPage from "./mainPage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function App() {
  return (
    <Layout>
      <MainPage />
    </Layout>
  );
}

export default App;
