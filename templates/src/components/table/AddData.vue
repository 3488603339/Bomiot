<template>
	<q-drawer v-model="addOpen" side="right" overlay elevated>
		<div class="q-pa-md">
			<q-input
				outlined
				v-for="i in arr"
				:key="i"
				style="margin-bottom: 10px"
				v-model="i.txt"
				:label="i.label"
			/>
			<q-toggle v-for="i in arr2" :key="i" v-model="i.toggle">{{
				i.label
			}}</q-toggle>

			<q-select
				v-for="i in slt"
				:key="i.label"
				filled
				v-model="i.txt"
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
			<q-btn icon="close" label="取消" @click="addOpen = false"></q-btn>
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
import { ref, watch } from "vue";
import { useTableDataStore } from "stores/tableData";

const store = useTableDataStore();
const addOpen = ref(false);
watch(
	() => store.getaddOpen,
	(newValue) => {
		addOpen.value = newValue;
	}
);
watch(
	() => addOpen.value,
	(newValue) => {
		store.addOpenChange(newValue);
		if (addOpen.value == false) {
			itemData.value.forEach((item) => {
				if (item.txt) {
					item.txt = "";
				}
				if (item.toggle) {
					item.toggle = false;
				}
			});
		}
	}
);
const props = defineProps({
	columnData: {
		default: [],
	},
});
const itemData = ref(props.columnData);
const arr = ref([]);
const arr2 = ref([]);
const slt = ref([]);
arr.value = itemData.value?.filter((item) => item.isShow && !item.select);
arr2.value = itemData.value?.filter((item) => item.toggle != undefined);
slt.value = itemData.value?.filter((item) => item.isShow && item.select);

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
//确定
const clickHandel = () => {
	// console.log(props.columnData, "新增的全部数据");
	// console.log([...arr.value, ...arr2.value, ...slt.value], "新增的数据");
};
</script>
