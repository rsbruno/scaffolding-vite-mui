import { AppIndexPage } from "@/pages/[app]";
import { Route } from "react-router-dom";

export function usePrivateRoutes() {
    return <>
        <Route path="app">
            <Route path="/app/" element={<AppIndexPage />} />
        </Route>
    </>

}