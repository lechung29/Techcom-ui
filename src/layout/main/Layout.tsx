import { Outlet } from "react-router-dom";
import { Header } from "../header"
import "./index.scss"

export const Layout: React.FunctionComponent = () => {

    return <div className="tc-layout-section">
        <Header />
        <div className="tc-layout-main-section">
            <Outlet />
        </div>
    </div>
};
