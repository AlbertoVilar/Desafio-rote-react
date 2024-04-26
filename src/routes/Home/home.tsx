import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Wellcome from "../../components/Wellcome";

const Home = () => {
    return (
        <>
            <Header />
            <Wellcome />
            <Outlet />
        </>
    );
}
export default Home;