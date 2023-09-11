import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  createBrowserRouter,
  Routes,
} from "react-router-dom";
import { HomeComponent } from "./pages/home/home";
import UserManagementComponent from "./modules/user-mangement/user-management";
import { Header } from "./layout/header";
import { Navigator } from "./layout/navigator";

function App() {
  const [isOpenNavigator, setOpenNavigator] = useState(false);
  function openNavigator() {
    setOpenNavigator(true);
  }
  return (
    <BrowserRouter>
      <Header onNavigatorChange={openNavigator} />
      <Navigator isOpen={isOpenNavigator} />
      <Routes>
        <Route path="/" element={<HomeComponent />}></Route>
        <Route
          path="/user-management"
          element={<UserManagementComponent />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
