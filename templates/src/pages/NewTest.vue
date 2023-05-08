<template>
	<div><MainTable :_columns="column" :_data="data"></MainTable></div>
</template>

<script setup>
import MainTable from "components/table/MainTable.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import { defineComponent, ref } from "vue";
//必传项 data为url,column为标头
const data = ref("user/list/");
/* const data = ref({
	get: "1111",
	del: "2222+1",
}); */
const column = ref([
	{
		name: "username",
		required: true,
		label: "username12",
		align: "left",
		field: "username",
		sortable: true,
		isShow: true, //新增
		input: true, //修改input框
		txt: "",
	},
	{
		name: "email",
		label: "email",
		field: "email",
		select: true /* 开启下拉框url必传 */,
		url: "112233" /* 开启下拉框url必传 */,
		sortable: true,
		isShow: true,
		input: false,
		txt: "",
	},
	{
		name: "phone",
		label: "phone",
		field: "phone",
		sortable: true,
		toggle: false,
		input: true,
	},
	{
		name: "is_active",
		label: "is_active",
		field: "is_active",
		sortable: true,
		toggle: true,
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
