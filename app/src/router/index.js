import { createRouter, createWebHistory } from "vue-router";
import {
  HomeView,
  PostsView,
  DetailsView,
  ApiTestView,
  LandingView,
  SignUpView,
  LoginView,
} from "../views";
import { useAuthStore } from "../store";

const routes = [
  { path: "/", name: "app", component: LandingView },
  { path: "/home", name: "home", component: HomeView },
  { path: "/api", name: "api", component: ApiTestView },
  { path: "/posts", name: "posts", component: PostsView },
  { path: "/posts/:id", name: "details", component: DetailsView, props: true },
  {path: "/SignUp", name: "signup", component: () => import("../views/SignUpView.vue")},
  {path: "/login", name: "login", component: LoginView },
  
];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes });



export default router;
