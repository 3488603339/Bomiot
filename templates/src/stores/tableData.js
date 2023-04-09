import { defineStore } from 'pinia';

export const useTableDataStore = defineStore('tabledata', {
  state: () => ({
    tableData: {
      column : [],
      originalRow : [],
      rowPerPage: [30, 100, 500, 1000]
    }

  }),

  getters: {
    getColumn: (state) => state.tableData.column,
    getoriginalRow: (state) => state.tableData.originalRow,
    getrowPerPage: (state) => state.tableData.rowPerPage,
  },

  actions: {
    columnChange(e) {
      this.tableData.column = e;
    },
    originalRowChange(e) {
      this.tableData.originalRow = e;
    }
  },
  persist: {
    enabled: true ,
  }
});
