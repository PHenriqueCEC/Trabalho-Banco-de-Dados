import {  Routes, Route } from "react-router-dom";
import { CreateCategoryDishPage } from "../pages/CategoriesDishes/create";
import { CreateCategoryRestaurantPage } from "../pages/CategoriesRestaurants/create";
import { CreateDessertPage } from "../pages/Desserts/create";
import { CreateDishPage } from "../pages/Dishes/create";
import { CreateDrinkPage } from "../pages/Drinks/create";
import { HomePage } from "../pages/Home";
import { ListOrdersPage } from "../pages/Orders";
import { ListOrdersByRestaurantPage } from "../pages/Orders/restaurant";
import { CreateRestaurantPage } from "../pages/Restaurants/create";
import { ShowRestaurantsPage } from "../pages/Restaurants/show";
import { ListUsersPage } from "../pages/Users";
import { CreateUserPage } from "../pages/Users/create";

export function RoutesApp() {
  return (
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/categorias/restaurante/cadastrar"
          element={<CreateCategoryRestaurantPage />}
        />
        <Route
          path="/categorias/pratos/cadastrar"
          element={<CreateCategoryDishPage />}
        />
        <Route
          path="/restaurantes/cadastrar"
          element={<CreateRestaurantPage />}
        />
        <Route path="/restaurante/:id" element={<ShowRestaurantsPage />} />
        <Route path="/pratos/:id/cadastrar" element={<CreateDishPage />} />
        <Route path="/bebidas/:id/cadastrar" element={<CreateDrinkPage />} />
        <Route
          path="/sobremesas/:id/cadastrar"
          element={<CreateDessertPage />}
        />
        <Route path="/usuarios/pedidos/:id" element={<ListOrdersPage />} />
        <Route
          path="/restaurante/pedidos/:id"
          element={<ListOrdersByRestaurantPage />}
        />
        <Route
          path="/usuarios/cadastrar"
          element={<CreateUserPage />}
        />
        <Route
          path="/usuarios"
          element={<ListUsersPage />}
        />
      </Routes>
    
  );
}
