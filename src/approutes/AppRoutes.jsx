import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AddPost from "../pages/AddPost";
import Post from "../pages/Post";

function AppRoutes() {
  return (
    // <UserProvider>
    <BrowserRouter>
    <NavBar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddPost />} />
      <Route path="/post" element={<Post />} />
    </Routes>
    </NavBar>
    </BrowserRouter>
    /* </UserProvider> */
  )
}

export default AppRoutes;