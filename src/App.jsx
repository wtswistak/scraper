import React from "react";
import AppLayout from "./layouts/AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { ArticleProvider } from "./contexts/articleContext";
import LikedPage from "./pages/LikedPage";

function App() {
  return (
    <ArticleProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="search/:searchQuery" element={<HomePage />} />
            <Route path="liked" element={<LikedPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ArticleProvider>
  );
}

export default App;
