import constantRoutes from "./constant";
import * as testRoutes from "../components/json/test";

const routes = [
	{
		path: "/",
		name: "首页",
		component: () => import("layouts/MainLayout.vue"),
		meta: { isHidden: true },
		children: [
			{
				path: "",
				name: "空",
				component: () => import("pages/IndexPage.vue"),
				meta: { isHidden: true },
			},
			{
				path: "test",
				name: "test",
				component: () => import("pages/NewTest.vue"),
				meta: { isHidden: true },
			},
			{
				path: "user",
				name: "user",
				component: () => import("pages/user/UserProfile.vue"),
				meta: { isHidden: true },
			},
			/* {
				path: "Test2",
				name: "Test2",
				component: () => import("pages/logon/TestTest.vue"),
				meta: { isHidden: true },
			}, */
			// ...testRoutes.default,
		],
	},
	{
		path: "/:catchAll(.*)*",
		name: ":catchAll(.*)*",
		meta: { isHidden: false },
		component: () => import("pages/ErrorNotFound.vue"),
	},
	...testRoutes.default,
];

constantRoutes.forEach((item) => {
	routes.push(item);
});
export default routes;
