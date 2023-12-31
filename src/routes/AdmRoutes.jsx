import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import NewAndEdit from "../pages/NewAndEdit";
import Details from "../pages/Details";
import AllOrders from "../pages/AllOrders";
import Order from "../pages/Order";
import NotFound from "../pages/NotFound";
import OffAir from "../pages/OffAir";

const AdmRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/new" element={<NewAndEdit />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/all-orders" element={<AllOrders />} />
            <Route path="/order/:id" element={<Order />} />
            <Route path="/off-air" element={<OffAir />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AdmRoutes