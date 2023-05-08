import { defineStore } from "pinia";

export const useTableDataStore = defineStore("tabledata", {
	state: () => ({
		tableData: {
			column: [],
			originalRow: [],
			rowPerPage: [30, 100, 500, 1000],
			addOpen: false,
			editOpen: false,
			edit: {},
		},
	}),

	getters: {
		getColumn: (state) => state.tableData.column,
		getoriginalRow: (state) => state.tableData.originalRow,
		getrowPerPage: (state) => state.tableData.rowPerPage,
		getaddOpen: (state) => state.tableData.addOpen,
		geteditOpen: (state) => state.tableData.editOpen,
		getedit: (state) => state.tableData.edit,
	},

	actions: {
		columnChange(e) {
			this.tableData.column = e;
		},
		originalRowChange(e) {
			this.tableData.originalRow = e;
		},
		addOpenChange(e) {
			this.tableData.addOpen = e;
		},
		editOpenChange(e) {
			this.tableData.editOpen = e;
		},
		editDataChange(e) {
			this.tableData.edit = e;
		},
	},
	persist: {
		enabled: true,
	},
});
