<template>
	<q-drawer v-model="editOpen" side="right" overlay elevated>
		<div class="q-pa-md">
			<q-input
				v-for="i in newKeysArr2"
				:key="i"
				outlined
				style="margin-bottom: 10px"
				v-model="i.data"
				:label="i.field"
			/>
			<q-toggle
				v-for="item in newarr"
				:key="item.field"
				v-model="item.toggle"
				>{{ item.field }}</q-toggle
			>

			<q-select
				v-for="i in newall"
				:key="i.label"
				filled
				v-model="i.data"
				use-input
				hide-selected
				fill-input
				input-debounce="0"
				:options="options"
				@filter="filterFn"
				:label="i.label"
				hint="Minimum 2 characters to trigger filtering"
				style="width: 250px; padding-bottom: 32px"
			>
				<template v-slot:no-option>
					<q-item>
						<q-item-section class="text-grey">
							No results
						</q-item-section>
					</q-item>
				</template>
			</q-select>

			<q-separator spaced />
			<q-btn icon="close" label="取消" @click="editOpen = false"></q-btn>
			<q-btn
				color="primary"
				icon="check"
				label="提交"
				@click="clickHandel()"
			></q-btn>
		</div>
	</q-drawer>
</template>
<script setup>
import { ref, watch, onMounted, computed } from "vue";

import { useTableDataStore } from "stores/tableData";
//接收父组件
const props = defineProps({
	columnData: {
		default: [],
	},
});
//定义pinia
const store = useTableDataStore();
const editOpen = ref(store.geteditOpen);
const rowsgetedit = computed(() => store.getedit);
//存放pinia里存储的本条数据
const keysArr = ref([]);
// keysArr.value = Object.keys(store.getedit);

keysArr.value = Object.keys(rowsgetedit.value);
watch(
	() => store.geteditOpen,
	(newValue) => {
		editOpen.value = newValue;
	}
);
watch(
	() => editOpen.value,
	(newValue) => {
		store.editOpenChange(newValue);
	}
);
//存储父组件表头
const itemData = ref(props.columnData);
const newKeysArr = ref([]);
//数据重构树形
newKeysArr.value = Object.keys(rowsgetedit.value).map((key) => ({
	field: key,
	data: rowsgetedit.value[key],
}));

//获取是下拉框的元素
const all = ref([]);
all.value = itemData.value.map((item, index) => {
	return item.field == newKeysArr.value[index + 1]?.field
		? { ...item, ...newKeysArr.value[index + 1] }
		: { ...item };
});
//input框数据
const newKeysArr2 = ref([]);
newKeysArr2.value = all.value.filter((i) => i.input);
//toggle数据
const newarr = ref([]);

newarr.value = all.value.filter((i) => i.toggle === true || i.toggle === false);
const newall = ref([]);
newall.value = all.value.filter((i) => i.select);

//下拉框
const stringOptions = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];
const options = ref(stringOptions);
const filterFn = (val, update, abort) => {
	if (val.length < 2) {
		abort();
		return;
	}
	//此处调接口取数据
	update(() => {
		//needle为输入框数据
		const needle = val.toLowerCase();
		//过滤出可显示输入框数据
		options.value = stringOptions.filter(
			(v) => v.toLowerCase().indexOf(needle) > -1
		);
	});
};
//确定事件
const clickHandel = () => {
	// console.log(all.value, "修改后的数据");
};
</script>
