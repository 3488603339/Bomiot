export default [
	{
		path: "/a",
		name: "一级菜单",
		meta: {
			title: "我是一级",
		},
		component: () => import("layouts/MainLayout.vue"),
		children: [
			{
				path: "/a",
				name: "二级菜单",
				meta: {
					title: "我是二级",
				},
				component: () => import("pages/a/index.vue"),
				children: [
					{
						path: "/a",
						name: "三级菜单",
						meta: {
							title: "我是三级",
						},
						component: () => import("pages/a/index.vue"),
					},
				],
			},
		],
	},
	{
		path: "/b",
		name: "一级",
		meta: {
			title: "我是一级",
		},
		component: () => import("layouts/MainLayout.vue"),
		children: [
			{
				path: "/b",
				name: "二级",
				meta: {
					title: "我是二级",
				},
				component: () => import("pages/b/index.vue"),
			},
		],
	},
];
