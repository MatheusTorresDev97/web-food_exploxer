import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import AdmRoutes from "./AdmRoutes";
import ClientRoutes from "./ClientRoutes";
import PublicRoutes from "./PublicRoutes";

import { useAuth } from '../hooks/useAuth'

const Routes = () => {

    const { userInfos } = useAuth();

    function renderRoutes() {
        if (!userInfos) {
            return <PublicRoutes />;
        }

        if (userInfos.isAdm) {
            return <AdmRoutes />;
        }

        if (!userInfos.isAdm) {
            return <ClientRoutes />;
        }
    }

    useEffect(() => {
        console.log({ userInfos });
    }, []);
    return (
        <BrowserRouter>
            {renderRoutes()}
        </BrowserRouter>
    )
}

export default Routes