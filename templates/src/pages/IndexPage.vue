<template>
  <q-page class="flex flex-center">
    <div style="margin-top: -7%;">
      <div class="q-mb-xl" style="color: #4C5875;text-align: center;">
        <div style="font-weight: bold;font-size: 100px;letter-spacing: 10px;">WELCOME</div>
        <div style="font-size: 22px;letter-spacing: 2px;">
          GreaterWMS
          {{ $t('index.index_title') }}
        </div>
      </div>
      <div class="flex flex-center">
        <WelcomeLottie style="width: 50%; max-width: 80%" />
      </div>
    </div>
    <div style="position: absolute;right: 2%;bottom: 8%;font-family:SourceHanSansCN; font-size: 16px;color: #4C5875;">—— &nbsp;&nbsp; Easy Come &nbsp; Easy Go &nbsp; &nbsp;——</div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import WelcomeLottie from 'components/lottie/WelcomeLottie.vue'

export default defineComponent({
  name: 'IndexPage',
  components: { WelcomeLottie }
})
</script>
