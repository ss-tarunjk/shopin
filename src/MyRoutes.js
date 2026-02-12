import { Route, Routes } from "react-router";

import HomePage from "./pages/HomePage";

import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./Layout";

export default function MyRoutes() {
    return (
        <div>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />



                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Layout>
        </div>
    );
}
