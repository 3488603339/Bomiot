<template>
  <div class="q-pa-md">
    <q-table
      ref="tableRef"
      class="my-sticky-header-table"
      :rows="rows"
      :columns="columns"
      row-key="id"
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
            {{ props.row.index }}
          </q-td>

          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.value }}
          </q-td>
        </q-tr>
      </template>
       <template v-slot:top-left>
         <q-btn-group push>
           <q-btn push color="primary" label="刷新" icon="refresh" />
           <q-btn push color="primary" label="新增" icon="add" />
<!--           <q-input-->
<!--              readonly-->
<!--              outlined-->
<!--              dense-->
<!--              v-model="createDate2"-->
<!--              :placeholder="interval"-->
<!--            >-->
<!--              <template v-slot:append>-->
<!--                <q-icon name="event" class="cursor-pointer">-->
<!--                  <q-popup-proxy-->
<!--                    ref="qDateProxy"-->
<!--                    transition-show="scale"-->
<!--                    transition-hide="scale"-->
<!--                    ><q-date v-model="createDate1" range-->
<!--                  /></q-popup-proxy>-->
<!--                </q-icon>-->
<!--              </template>-->
<!--            </q-input>-->
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
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
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
          :max-pages="6"
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
</template>

<script>
import { ref, onMounted, defineComponent, computed } from 'vue'
import { useTableDataStore } from "stores/tableData";
import OperationNote from 'components/operation/OperationNote.vue'

export default defineComponent({
  name: 'MainTable',
  components: {
    OperationNote
  },
  setup () {
    const store = useTableDataStore();
    const tableRef = ref()
    const columns = computed(() => store.tableData.column)
    const originalRows = computed(() => store.tableData.originalRow)
    const rows = ref([])
    const filter = ref('')
    const loading = ref(false)
    const pagination = ref({
        sortBy: 'desc',
        descending: false,
        page: 1,
        rowsPerPage: 30,
        rowsNumber: 10
      })

    function fetchFromServer (startRow, count, filter, sortBy, descending) {
      const data = filter
        ? originalRows.value.filter(row => row.name.includes(filter))
        : originalRows.value.slice()
      if (sortBy) {
        const sortFn = sortBy === 'desc'
          ? (descending
              ? (a, b) => (a.name > b.name ? -1 : a.name < b.name ? 1 : 0)
              : (a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
            )
          : (descending
              ? (a, b) => (parseFloat(b[ sortBy ]) - parseFloat(a[ sortBy ]))
              : (a, b) => (parseFloat(a[ sortBy ]) - parseFloat(b[ sortBy ]))
            )
        data.sort(sortFn)
      }

      return data.slice(startRow, startRow + count)
    }

    function getRowsNumberCount (filter) {
      if (!filter) {
        return originalRows.value.length
      }
      let count = 0
      originalRows.value.forEach(treat => {
        if (treat.name.includes(filter)) {
          ++count
        }
      })
      return count
    }

    function onRequest (props) {
      const { page, rowsPerPage, sortBy, descending } = props.pagination
      const filter = props.filter
      loading.value = true
      setTimeout(() => {
        pagination.value.rowsNumber = getRowsNumberCount(filter)
        const fetchCount = rowsPerPage === 0 ? pagination.value.rowsNumber : rowsPerPage
        const startRow = (page - 1) * rowsPerPage
        const returnedData = fetchFromServer(startRow, fetchCount, filter, sortBy, descending)
        rows.value.splice(0, rows.value.length, ...returnedData)
        rows.value.forEach((item, index) =>{
          item.index = index + 1
        })
        pagination.value.page = page
        pagination.value.rowsPerPage = rowsPerPage
        pagination.value.sortBy = sortBy
        pagination.value.descending = descending
        loading.value = false
      }, 1000)
    }

    onMounted(() => {
      tableRef.value.requestServerInteraction()
    })

    return {
      tableRef,
      filter,
      loading,
      pagination,
      columns,
      originalRows,
      rows,

      onRequest,
      pagesNumber: computed(() => {
        return Math.ceil(rows.value.length / pagination.value.rowsPerPage)
      })
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
    /* bg color is important for th; just specify one */

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
    /* bg color is important for th; just specify one */

  td:first-child

  th:first-child,
  td:first-child
    position: sticky
    left: 0
    z-index: 1
</style>
