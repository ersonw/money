import Home from "@/pages/Home"
import Mine from "@/pages/Mine"
import Login from "@/pages/Login";

console.log(`process.env.API: ${typeof process.env.API}`)

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
    footer: true,
  },
  {
    path: "/mine",
    exact: true,
    component: Mine,
    footer: true,
  },
  {
    path: "/login",
    exact: true,
    header: {
      title: "注册/登录",
      showTitle: true,
      showBack: true,
      showShare: false,
    },
    // render: (props: any)=>(<Login {...props} />)
    component: Login,
  }
];

export default routes;
