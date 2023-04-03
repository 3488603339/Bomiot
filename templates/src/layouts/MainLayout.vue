<template>
  <q-layout view="hHh lpr lfr">
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          GreaterWMS
        </q-toolbar-title>
        <LanguageChoice/>
        <DarkMode />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" elevated>
      <q-list>
        <q-item-label
          header
        >
          主菜单
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, onBeforeMount, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import DarkMode from 'components/headers/DarkMode.vue'
import LanguageChoice from "components/headers/LanguageChoice.vue"
import { useQuasar } from 'quasar'
import { usetokenStore } from 'stores/token';

const linksList = [
  {
    title: '测试地址',
    caption: '这是一个测试辞职',
    icon: 'school',
    link: 'test'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    DarkMode,
    LanguageChoice
  },

  setup () {
    const leftDrawerOpen = ref(true)
    const tokenStore = usetokenStore();

    onBeforeMount(() => {
      tokenStore.tokencheck()
    })

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      tokenStore
    }
  }
})
</script>
