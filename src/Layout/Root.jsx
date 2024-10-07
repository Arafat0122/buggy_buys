import { Outlet } from "react-router-dom";
import Navbar from "../Common/Navbar/Navbar";
import Footer from "../Common/Footer/Footer";


const Root = () => {
    return (
        <>
            <Navbar />
            <div>
                <Outlet></Outlet>
            </div>
            <Footer />
        </>
    );
};

export default Root;