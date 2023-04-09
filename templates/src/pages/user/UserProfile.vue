<template>
  <UserTable />
</template>

<script>
import UserTable from 'components/user/UserTable.vue'
import { useTableDataStore } from "stores/tableData";
import {defineComponent, onMounted, ref} from "vue";

export default defineComponent({
  name: "UserProfile",
  components: {
    UserTable
  },
  setup () {
    const store = useTableDataStore();
    const column = ref([])

    onMounted(()=> {
      store.columnChange(column.value)
      column.value = [
        { name: 'username', required: true, label: 'username', align: 'left', field: 'username', sortable: true},
        { name: 'email', label: 'email', field: 'email', sortable: true },
        { name: 'phone', label: 'phone', field: 'phone', sortable: true },
        { name: 'is_active', label: 'is_active', field: 'is_active', sortable: true },
        { name: 'date_joined', label: 'date_joined', field: 'date_joined', sortable: true },
        { name: 'last_login', label: 'last_login', field: 'last_login', sortable: true },
     ]
      store.columnChange(column.value)
    })

    return {
      column
    }
  }

})
</script>

<style scoped>

</style>
