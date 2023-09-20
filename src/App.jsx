import React from "react";
import AppLayout from "./layouts/AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { ArticleProvider } from "./contexts/articleContext";
import LikedPage from "./pages/LikedPage";

function App() {
  return (
    <ArticleProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Homepage />} />
            <Route path="search/:searchQuery" element={<Homepage />} />
            <Route path="liked" element={<LikedPage />} />
            <Route path="*" element={<Homepage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ArticleProvider>
  );
}

export default App;
