import Home from "@/pages/Home"
import Mine from "@/pages/Mine"
import Login from "@/pages/Login";
import My from "@/pages/My";
import Setting from "@/pages/Setting";
import ChangePassword from "@/pages/ChangePassword";
import Details from "@/pages/Details";
import Apply from "@/pages/Apply";
import Order from "@/pages/Order";
import About from "@/pages/About";
import Question from "@/pages/Question";
import Contract from "@/pages/Contract";

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
  {
    path: "/apply",
    exact: true,
    header: {
      title: "借款",
      showTitle: true,
      showBack: true,
    },
    component: Apply,
  },
  {
    path: "/order",
    exact: true,
    header: {
      title: "我的借款",
      showTitle: true,
      showBack: true,
    },
    component: Order,
  },
  {
    path: "/about",
    exact: true,
    header: {
      title: "关于我们",
      showTitle: true,
      showBack: true,
    },
    component: About,
  },
  {
    path: "/question",
    exact: true,
    header: {
      title: "常见问题",
      showTitle: true,
      showBack: true,
    },
    component: Question,
  },
  {
    path: "/contract",
    exact: true,
    header: {
      title: "借款合同",
      showTitle: true,
      showBack: true,
    },
    component: Contract,
  },
];

export default routes;
