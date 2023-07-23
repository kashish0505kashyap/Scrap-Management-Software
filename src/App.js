import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/AllRoutes";
import Navbar from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={<route.component />}
                    />
                ))}
            </Routes>
            {/* <Footer/> */}
        </Router>
    );
}

export default App;
