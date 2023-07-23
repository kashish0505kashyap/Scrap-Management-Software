import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import ProductPage from "../pages/ProductPage";
import ScrapDetailPage from "../pages/ScrapDetailPage";

const routes = [
    { path: "/", component: HomePage, exact: true },
    { path: "/about", component: DashboardPage, exact: true },
     {path:"/products",component:ProductPage,exact:true},
     {path:"/products/:productId",component:ScrapDetailPage,exact:true}
    // Add more routes as needed
];

export default routes;
