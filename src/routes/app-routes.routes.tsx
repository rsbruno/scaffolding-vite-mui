import { BrowserRouter, Routes } from "react-router-dom";
import { usePrivateRoutes } from "./private.routes";
import { usePublicRoutes } from "./public.routes";

export function AppRoutes() {
    const privateRoutes = usePrivateRoutes();
    const publicRoutes = usePublicRoutes();
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes}
                {privateRoutes}
            </Routes>
        </BrowserRouter>

    );
};