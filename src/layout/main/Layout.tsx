import { Outlet } from "react-router-dom";
import { Header } from "../header"

export const Layout = () => {

    return <div className="w-full min-h-dvh flex flex-col">
        <Header />
        <div className="flex-1">
            <Outlet />
        </div>
    </div>
};
