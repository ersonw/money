import Home from "@/pages/Home"
import Mine from "@/pages/Mine"
import Login from "@/pages/Login";

console.log(`process.env.API: ${typeof process.env.API}`)

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/home",
    exact: true,
    component: Home
  },
  {
    path: "/mine",
    exact: true,
    component: Mine,
  },
  {
    path: "/login",
    exact: true,
    component: Login,
  }
];

export default routes;