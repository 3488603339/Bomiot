<template>
	<div><MainTable :_columns="column" :_data="data"></MainTable></div>
</template>

<script setup>
import MainTable from "components/table/MainTable.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import { defineComponent, ref } from "vue";
const data = ref("user/list/");
const column = ref([
	{
		name: "username",
		required: true,
		label: "aaa",
		align: "left",
		field: "username",
		sortable: true,
	},
	{
		name: "email",
		label: "email",
		field: "email",
		sortable: true,
	},
	{
		name: "phone",
		label: "phone",
		field: "phone",
		sortable: true,
	},
	{
		name: "is_active",
		label: "is_active",
		field: "is_active",
		sortable: true,
	},
	{
		name: "date_joined",
		label: "date_joined",
		field: "date_joined",
		sortable: true,
	},
	{
		name: "last_login",
		label: "last_login",
		field: "last_login",
		sortable: true,
	},
	{ name: "action", label: `${t("action")}`, align: "right" },
]);
</script>

<style scoped></style>
