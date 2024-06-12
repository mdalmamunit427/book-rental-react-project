import { useContext } from "react";
import { ThemeContext } from "../context";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import BookList from "../pages/books/BookList";
import { Outlet } from "react-router-dom";


const Main = () => {
    const {darkMode} = useContext(ThemeContext);
  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
    <Header />
    <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <div className="min-h-screen">
            <Outlet/>
            </div>
        </div>
    </main>
    <Footer />
</div>
  )
}

export default Main