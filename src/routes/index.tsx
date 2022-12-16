import Home from "@/pages/Home"
import Mine from "@/pages/Mine"
import Login from "@/pages/Login";
import My from "@/pages/My";
import Setting from "@/pages/Setting";
import ChangePassword from "@/pages/ChangePassword";
import Details from "@/pages/Details";

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
    path: "/my",
    exact: true,
    component: My,
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
    component: Login,
  },
  {
    path: "/setting",
    exact: true,
    header: {
      title: "账号设置",
      showTitle: true,
      showBack: true,
    },
    component: Setting,
  },
  {
    path: "/changePassword",
    exact: true,
    header: {
      title: "修改密码",
      showTitle: true,
      showBack: true,
    },
    component: ChangePassword,
  },
  {
    path: "/details",
    exact: true,
    header: {
      title: "完善信息",
      showTitle: true,
      showBack: true,
    },
    component: Details,
  },
];

export default routes;
