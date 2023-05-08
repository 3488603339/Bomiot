<template>
	<q-layout view="hHh lpr lfr">
		<q-header reveal elevated class="bg-primary text-white">
			<q-toolbar>
				<q-btn
					flat
					dense
					round
					icon="menu"
					aria-label="Menu"
					@click="toggleLeftDrawer"
				/>

				<q-toolbar-title> GreaterWMS </q-toolbar-title>
				<LanguageChoice />
				<DarkMode />
				<FullScreen />
			</q-toolbar>
		</q-header>

		<q-drawer v-model="leftDrawerOpen" side="left" elevated>
			<q-list>
				<q-item-label header> 主菜单 </q-item-label>

				<!-- <EssentialLink
					v-for="link in essentialLinks"
					:key="link.title"
					v-bind="link"
				/> -->
				<EssentialLink :asyncRoutes="asyncRoutes" />
				<!-- <Test v-for="link in asyncRoutes" :key="link" v-bind="link" /> -->
			</q-list>
		</q-drawer>

		<q-page-container>
			<router-view />
		</q-page-container>
	</q-layout>
</template>

<script setup>
import { defineComponent, onBeforeMount, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import DarkMode from "components/headers/DarkMode.vue";
import FullScreen from "components/headers/FullScreen.vue";
import LanguageChoice from "components/headers/LanguageChoice.vue";
import { useQuasar } from "quasar";
import { usetokenStore } from "stores/token";
import asyncRoutes from "../router/routes";
import testjson from "../components/json/test.js";

const linksList = ref([
	{
		title: "测试地址",
		caption: "这是一个测试辞职",
		icon: "school",
		link: "test",
	},
	{
		title: "用户管理",
		caption: "用户的管理",
		icon: "people",
		link: "user",
	},
	{
		title: "测试2",
		caption: "用户的管理",
		icon: "people",
		link: "Test2",
	},
]);
const essentialLinks = ref([]);
const leftDrawerOpen = ref(true);
const tokenStore = usetokenStore();
onBeforeMount(() => {
	// essentialLinks.value = linksList.value;
	/* essentialLinks.value = asyncRoutes; */
	essentialLinks.value = testjson;
	tokenStore.tokencheck();
});
const toggleLeftDrawer = () => (leftDrawerOpen.value = !leftDrawerOpen.value);

/* export default defineComponent({
	name: "MainLayout",
	components: {
		EssentialLink,
		DarkMode,
		LanguageChoice,
		FullScreen,
	},
	setup() {
		const leftDrawerOpen = ref(true);
		const tokenStore = usetokenStore();
		onBeforeMount(() => {
			tokenStore.tokencheck();
		});
		return {
			essentialLinks: linksList,
			leftDrawerOpen,
			toggleLeftDrawer() {
				leftDrawerOpen.value = !leftDrawerOpen.value;
			},
			tokenStore,
		};
	},
}); */
</script>
