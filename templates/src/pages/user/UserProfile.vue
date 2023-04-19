<template>
  <TableData />
</template>

<script>
import TableData from 'components/table/TableData.vue'
import { useTableDataStore } from "stores/tableData"
import { defineComponent, onMounted, ref, watch, computed } from "vue"
import { useI18n } from "vue-i18n"
import { useLanguageStore } from "stores/language"

export default defineComponent({
  name: "MainTable",
  components: {
    TableData
  },
  setup () {
    const languageStore = useLanguageStore()
    const lang = computed(() => languageStore.lang);
    const tableStore = useTableDataStore()
    const { t } = useI18n()
    const column = ref([])

    function columnChange () {
      tableStore.columnChange([])
      column.value = [
        { name: 'username', required: true, label: 'username', align: 'left', field: 'username', sortable: true},
        { name: 'email', label: 'email', field: 'email', sortable: true },
        { name: 'phone', label: 'phone', field: 'phone', sortable: true },
        { name: 'is_active', label: 'is_active', field: 'is_active', sortable: true },
        { name: 'date_joined', label: 'date_joined', field: 'date_joined', sortable: true },
        { name: 'last_login', label: 'last_login', field: 'last_login', sortable: true },
        { name: 'action', label: `${t('action')}`, align: 'right' }
      ]
      tableStore.columnChange(column.value)
    }

    onMounted(()=> {
      columnChange()
    })

    watch (lang,(newValue, oldValue)=>{
      columnChange()
    })

    return {
      t,
      lang,
      column
    }
  }

})
</script>
