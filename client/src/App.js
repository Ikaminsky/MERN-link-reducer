import React from "react";
import 'materialize-css';
import './index.css';
import {BrowserRouter as Router} from "react-router-dom";
import {useRoutes} from "./pages/routes";
import {useAuth} from "./hooks/useAuth";
import {AuthContext} from "./context/authContext";
import {Navbar} from "./components/Navbar";
import {Loader} from "./components/Loader";

function App() {
  const { logout, login, token, userId, ready} = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  if (!ready) {
      return <Loader />
  }
  return (
      <AuthContext.Provider value={{token, userId, login, logout, isAuthenticated}}>
      <Router>
          {isAuthenticated && <Navbar />}
        <div className="container">
            {routes}
        </div>
      </Router>
      </AuthContext.Provider>
  );
}

export default App;
