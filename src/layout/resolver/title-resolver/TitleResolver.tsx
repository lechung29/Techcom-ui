import { PropsWithChildren, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export const TitleResolver = (props: PropsWithChildren) => {
    const { children } = props;

    const location = useLocation();

    const prefix = "TechCom"

    useEffect(() => {
        let title = "";
        switch (location.pathname) {
            case "/":
                title = "Home";
                break;
            case "/about":
                title = "About Us";
                break;
            default:
                title = "Page Not Found";
        }

        document.title = title ? `${prefix} | ${title}` : prefix;
    }, [location.pathname]);

    return <>
        {children ? children : <Outlet />}
    </>
};
