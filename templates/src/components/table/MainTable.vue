<template>
	<div><TableData :_columns="_columns" :data="urlData" /></div>
</template>
<script setup>
import TableData from "components/table/TableData.vue";
import { useTableDataStore } from "stores/tableData";
import { defineComponent, onMounted, ref, watch, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useLanguageStore } from "stores/language";

const _column = defineProps({
	_columns: {
		default: [],
	},
	_data: {
		default: "",
	},
});
const urlData = ref(_column._data);
const column = ref(_column._columns);
const languageStore = useLanguageStore();
const lang = computed(() => languageStore.lang);
const tableStore = useTableDataStore();
const { t } = useI18n();
function columnChange() {
	tableStore.columnChange([]);
	tableStore.columnChange(column.value);
}

onMounted(() => {
	columnChange();
});

watch(lang, (newValue, oldValue) => {
	columnChange();
});
</script>
