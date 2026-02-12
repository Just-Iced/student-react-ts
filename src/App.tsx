import "bootstrap/dist/css/bootstrap.css";
import { Outlet } from "react-router"
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <Outlet title={"Hello, welcome to students-react with Typescript!"}
          subtitle={"You can view some of your favorite students here."}>
          Surely, school is fun.
        </Outlet>

      </div></>
  );
}
export default App;