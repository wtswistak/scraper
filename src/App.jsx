import React from "react";
import AppLayout from "./layouts/AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { ArticleProvider } from "./contexts/ArticleContext";
import LikedPage from "./pages/LikedPage";
import { InputQueryProvider } from "./contexts/InputQueryContext";

function App() {
  return (
    <ArticleProvider>
      <InputQueryProvider>
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
      </InputQueryProvider>
    </ArticleProvider>
  );
}

export default App;
