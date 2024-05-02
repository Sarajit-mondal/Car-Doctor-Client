import { Outlet } from "react-router-dom";
import Navbar from "../pages/shard/Navbar";
import Footer from "../pages/shard/Footer";

function MainLayout() {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default MainLayout;
