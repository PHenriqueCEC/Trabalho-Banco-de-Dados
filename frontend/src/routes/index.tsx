import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CreateCategoryRestaurantPage } from "../pages/CategoriesRestaurants/create";
import { HomePage } from "../pages/Home";

export function RoutesApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/categorias/restaurante/cadastrar"
          element={<CreateCategoryRestaurantPage />}
        />
      </Routes>
    </Router>
  );
}
