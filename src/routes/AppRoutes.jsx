import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/app/Home/Home";
import Search from "../pages/app/Search/Search";
import Profile from "../pages/app/Profile/Profile";
import LikedSongs from "../pages/app/LikedSongs/LikedSongs";

import Login from "../pages/auth/Login/Login";
import Callback from "../pages/auth/Callback/Callback";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/liked-songs" element={<LikedSongs />} />
                </Route>

                <Route path="/login" element={<Login />} />
                <Route path="/callback" element={<Callback />} />

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;