<template>
  <div class="q-pa-md">
    <q-table
      ref="tableRef"
      :class="{ 'my-sticky-header-table': action === false, 'my-sticky-header-column-table': action === true }"
      :rows="rows"
      :columns="columns"
      row-key="id"
      :rows-per-page-options="rowsPerPageOptions"
      v-model:pagination="pagination"
      rows-per-page-label="每页多少行"
      :loading="loading"
      :filter="filter"
      binary-state-sort
      @request="onRequest"
      :style="{ height: ($q.screen.height - 85) + '' + 'px' }"
      bordered
    >
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th />
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props" :key="`m_${props.row.index}`">
          <q-td>
            {{ props.rowIndex + 1 }}
          </q-td>
          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            <div v-if="col.value === true">
              <q-icon color="secondary" size="30px" name="check_circle_outline"></q-icon>
            </div>
            <div v-else-if="col.value === false">
              <q-icon color="brown-5" size="30px" name="clear"></q-icon>
            </div>
            <div v-else>
              <div v-if="col.name === 'action'">
                <q-btn round flat push color="purple" icon="edit" @click="editData(props.row)">
                   <q-tooltip content-class="bg-amber text-black shadow-4" :offset="[10, 10]" content-style="font-size: 12px">
                    {{ $t('edit') }}
                  </q-tooltip>
                 </q-btn>
                 <q-btn round flat push color="dark" icon="delete" @click="deleteData(props.row)">
                   <q-tooltip content-class="bg-amber text-black shadow-4" :offset="[10, 10]" content-style="font-size: 12px">
                    {{ $t('delete') }}
                  </q-tooltip>
                 </q-btn>
              </div>
              <div v-else>
                {{ col.value }}
              </div>
            </div>
          </q-td>
        </q-tr>
      </template>
       <template v-slot:top-left>
         <q-btn-group push>
           <q-btn push color="primary" label="新增" icon="person_add_alt"  @click="addOpenDrawer" />
           <q-btn push
             color="primary"
             icon-right="archive"
             label="Export to csv"
             no-caps
           />
         </q-btn-group>
         <OperationNote />
       </template>
      <template v-slot:top-right="props">
        <q-input borderless dense debounce="300" v-model="filter" :placeholder="$t('search')">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-btn
          flat round dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
          class="q-ml-md"
        />
      </template>
      <template v-slot:pagination="scope">
        总共：{{ pagination.rowsNumber }}行数据
        <q-btn
          v-if="scope.pagesNumber > 2"
          icon="first_page"
          color="grey-8"
          round
          dense
          flat
          :disable="scope.isFirstPage"
          @click="scope.firstPage"
        />
        <q-btn
          icon="chevron_left"
          color="grey-8"
          round
          dense
          flat
          :disable="scope.isFirstPage"
          @click="scope.prevPage"
        />
        <q-pagination
          v-model="pagination.page"
          :max="scope.pagesNumber"
          :max-pages="10"
          boundary-numbers
          @click="onRequest(scope)"
        />
        <q-btn
          icon="chevron_right"
          color="grey-8"
          round
          dense
          flat
          :disable="scope.isLastPage"
          @click="scope.nextPage"
        />
        <q-btn
          v-if="scope.pagesNumber > 2"
          icon="last_page"
          color="grey-8"
          round
          dense
          flat
          :disable="scope.isLastPage"
          @click="scope.lastPage"
        />
      </template>
      <template v-slot:no-data="{ icon, message, filter }">
        <div class="full-width row flex-center text-accent q-gutter-sm">
          <q-icon size="2em" name="sentiment_dissatisfied" />
          <span>
            Well this is sad... {{ message }}
          </span>
          <q-icon size="2em" :name="filter ? 'filter_b_and_w' : icon" />
        </div>
      </template>
    </q-table>
  </div>
  <q-drawer v-model="addOpen" side="right" overlay elevated>
      <div class="q-pa-md">
        <q-input />
        <q-toggle v-model="addOpen" />
        <q-separator spaced />
        <q-btn icon="close" label="取消" @click="addOpen = false"></q-btn>
        <q-btn color="primary" icon="check" label="提交"></q-btn>
      </div>
  </q-drawer>
</template>

<script>
import { ref, onMounted, defineComponent, computed } from 'vue'
import { useTableDataStore } from "stores/tableData"
import OperationNote from 'components/operation/OperationNote.vue'
import { api } from 'boot/axios'
import { useI18n } from "vue-i18n"

export default defineComponent({
  name: 'UserTable',
  components: {
    OperationNote
  },
  setup () {
    const tableStore = useTableDataStore()
    const { t } = useI18n()
    const tableRef = ref()
    const columns = computed(() => tableStore.getColumn)
    const originalRows = computed(() => tableStore.getoriginalRow)
    const rowsPerPageOptions = computed(() => tableStore.getrowPerPage)
    const rows = ref([])
    const filter = ref('')
    const loading = ref(false)
    const action = ref(false)
    const pagination = ref({
      sortBy: 'id',
      descending: false,
      page: 1,
      rowsPerPage: 30,
      rowsNumber: 30
    })
    const addOpen = ref(false)


    async function fetchFromServer (startRow, count, filter, sortBy, descending) {
      if (descending === false) {
        sortBy = '-' + sortBy
      }
      await api.get('user/list/?page=' + '' + pagination.value.page + '&max_page=' + '' + count + '&ordering=' + sortBy).then(res =>{
        tableStore.originalRowChange(res.data.results)
        pagination.value.rowsNumber = res.data.count
      })
      return originalRows.value.slice()
    }

    function onRequest (props) {
      const { page, rowsPerPage, sortBy, descending } = props.pagination
      const filter = props.filter
      loading.value = true
      setTimeout(async () => {
        const fetchCount = rowsPerPage === 0 ? pagination.value.rowsNumber : rowsPerPage
        const startRow = (page - 1) * rowsPerPage
        const returnedData = await fetchFromServer(startRow, fetchCount, filter, sortBy, descending)
        rows.value.splice(0, rows.value.length, ...returnedData)
        pagination.value.page = page
        pagination.value.rowsPerPage = rowsPerPage
        pagination.value.sortBy = sortBy
        pagination.value.descending = descending
        loading.value = false
      }, 1000)
    }

    onMounted(() => {
      columns.value.forEach(item => {
        if (item.name === 'action'){
          action.value = true
        }
      })
      tableRef.value.requestServerInteraction()
    })

    return {
      tableRef,
      t,
      filter,
      loading,
      action,
      pagination,
      columns,
      originalRows,
      rowsPerPageOptions,
      rows,
      addOpen,

      onRequest,
      pagesNumber: computed(() => {
        return Math.ceil(rows.value.length / pagination.value.rowsPerPage)
      }),

      addOpenDrawer () {
        addOpen.value = !addOpen.value
      },
    }
  }
})
</script>
