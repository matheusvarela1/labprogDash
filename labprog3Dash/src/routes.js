
import Dashboard from "views/Dashboard.js";
import ViewData from "views/ListDiseases";



var routes = [
 
  {
    path: "/dashboard",
    name: "Mapeamento",
    icon: "nc-icon nc-chart-bar-32",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/diseases",
    name: "Doenças Mapeadas",
    icon: "nc-icon nc-tile-56",
    component: ViewData,
    layout: "/admin",
  },

];
export default routes;