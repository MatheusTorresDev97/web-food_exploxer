import { BrowserRouter } from "react-router-dom";

import AdmRoutes from "./AdmRoutes";
import ClientRoutes from "./ClientRoutes";
import PublicRoutes from "./PublicRoutes";

const Routes = () => {
    return (
        <BrowserRouter>
            <PublicRoutes />
        </BrowserRouter>
    )
}

export default Routes