<template>
	<!--
	<q-item
		v-for="item in asyncRoutes"
		:key="item.name"
		clickable
		:to="{ name: item.path }"
	>
		<q-item-section v-if="icon" avatar>
			<q-icon :name="icon" />
		</q-item-section>

		<q-item-section>
			<q-item-label>{{ item.path }}</q-item-label>
			<q-item-label caption>{{ caption }}</q-item-label>
		</q-item-section>
		<EssentialLink :asyncRoutes="item.children" />
	</q-item> -->

	<!-- <ul>
		<li v-for="item in asyncRoutes" :key="item.name">
			<span>{{ item.name }}</span>
			<EssentialLink :asyncRoutes="item.children" />
		</li>
	</ul> -->
	<div>
		<template v-for="(item, index) in asyncRoutes" :key="item.name">
			<div v-if="item.meta?.isHidden !== false">
				<q-item
					clickable
					v-ripple
					:class="baseItemClass"
					v-if="!item.children"
					:exact="item.path === '/'"
					:key="index"
					:inset-level="initLevel"
					:to="handleLink(basePath, item.path)"
				>
					<q-item-section>
						{{ item.name }}
					</q-item-section>
				</q-item>
				<q-expansion-item
					v-else
					:label="item.name"
					:header-inset-level="initLevel"
				>
					<EssentialLink
						style="padding-left: 16px"
						:init-level="initLevel + 1.4"
						:bg-color-level="bgColorLevel + 1"
						:base-path="
							basePath === undefined
								? item.path
								: basePath + '/' + item.path
						"
						:asyncRoutes="item.children"
					/>
				</q-expansion-item>
			</div>
		</template>
	</div>
</template>

<script>
export default {
	name: "EssentialLink",
};
</script>

<script setup>
import { ref, computed } from "vue";
const basePath = ref();
defineProps({
	asyncRoutes: Array,
});
const baseItemClass = ref("base-menu-item");
computed: {
	baseItemClassWithNoChildren = () => {
		(path) => {
			// console.log(path);
			this.$route.fullPath.startsWith(path)
				? "baseRootItemActive base-menu-item" + this.baseItemClass
				: this.baseItemClass;
		};
	};
}
const cliak = () => {
	console.log(1312);
};
const initLevel = ref(0);
const bgColorLevel = ref(1);

function baseItemClassWithNoChildren() {}
const handleLink = (basePath, itemPath) => {
	const link = basePath === undefined ? itemPath : basePath + "/" + itemPath;
	if (link.indexOf("http") !== -1) {
		return "#";
	}
	return link;
};
</script>
<style></style>
<!-- <script>
import { defineComponent } from "vue";

export default defineComponent({
	name: "EssentialLink",
	props: {
		title: {
			type: String,
			required: true,
		},

		caption: {
			type: String,
			default: "",
		},

		link: {
			type: String,
			default: "/",
		},

		icon: {
			type: String,
			default: "",
		},
		arr: {
			type: String,
			default: "",
		},
	},
});
</script> -->
