import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LikedPage from "./pages/LikedPage";
import AppLayout from "./layouts/AppLayout";
import { ArticleProvider } from "./contexts/ArticleContext";
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
