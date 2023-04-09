<template>
  <div class="q-pa-md">
    <q-table
      ref="tableRef"
      class="my-sticky-header-table"
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
            {{ col.value }}
            <q-popup-edit v-model="col.value" buttons v-slot="scope">
              <q-input v-model="scope.value" dense autofocus />
            </q-popup-edit>
          </q-td>
        </q-tr>
      </template>
       <template v-slot:top-left>
         <q-btn-group push>
           <q-btn push color="primary" label="新增" icon="person_add_alt"  @click="toggleRightDrawer" />
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
import { useTableDataStore } from "stores/tableData";
import OperationNote from 'components/operation/OperationNote.vue'
import { api } from 'boot/axios'

export default defineComponent({
  name: 'UserTable',
  components: {
    OperationNote
  },
  setup () {
    const store = useTableDataStore();
    const tableRef = ref()
    const columns = computed(() => store.getColumn)
    const originalRows = computed(() => store.getoriginalRow)
    const rowsPerPageOptions = computed(() => store.getrowPerPage)
    const rows = ref([])
    const filter = ref('')
    const loading = ref(false)
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
        store.originalRowChange(res.data.results)
      })
      return originalRows.value.slice()
    }

    async function getRowsNumberCount (filter) {
      await api.get('user/count/?search_word=' + '' + filter).then(res =>{
          pagination.value.rowsNumber = res.data.results
        })
      return pagination.value.rowsNumber
    }

    function onRequest (props) {
      const { page, rowsPerPage, sortBy, descending } = props.pagination
      const filter = props.filter
      loading.value = true
      setTimeout(async () => {
        await getRowsNumberCount(filter)
        const fetchCount = rowsPerPage === 0 ? pagination.value.rowsNumber : rowsPerPage
        const startRow = (page - 1) * rowsPerPage
        const returnedData = await fetchFromServer(startRow, fetchCount, filter, sortBy, descending)
        console.log(3, returnedData)
        rows.value.splice(0, rows.value.length, ...returnedData)
        pagination.value.page = page
        pagination.value.rowsPerPage = rowsPerPage
        pagination.value.sortBy = sortBy
        pagination.value.descending = descending
        loading.value = false
      }, 1000)
    }

    onMounted(() => {
      const data = {
        filter: filter.value,
        pagination: pagination.value
      }
      // onRequest(data)
      tableRef.value.requestServerInteraction()
    })

    return {
      tableRef,
      filter,
      loading,
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

      toggleRightDrawer () {
        addOpen.value = !addOpen.value
      },
    }
  }
})
</script>

<style lang="sass">
.my-sticky-header-table
  /* height or max-height is important */
  height: 310px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    background: #ffffff

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px

  thead tr:first-child th:first-child
    background: #ffffff

  td:first-child
    background: #ffffff

  td:first-child
    position: sticky
    left: 0
    z-index: 1
</style>
