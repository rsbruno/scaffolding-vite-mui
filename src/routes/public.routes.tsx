import { SignInPage } from "@/pages/[publics]/Singin";
import { Route } from "react-router-dom";

export function usePublicRoutes() {
    return <>
        <Route path="">
            <Route path="" element={<SignInPage />} />
        </Route>
    </>

}