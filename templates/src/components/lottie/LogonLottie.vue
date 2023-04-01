<template>
  <div id="Logonlottie"></div>
</template>

<script>
import lottie from 'lottie-web'
import logonlottie from './logonlottie.json'
import { defineComponent, onMounted, ref } from "vue"

export default defineComponent({
  name: 'LogonLottie',
  props: {
    animationData: {
      type: Object,
      default: logonlottie
    },
    animationSpeed: {
      type: Number,
      default: 2
    },
  },
  setup (props) {
    const animation = ref({})

    function initLottie () {
      animation.value = lottie.loadAnimation({
        container: document.getElementById("Logonlottie"),
        renderer: 'svg',
        loop: true,
        animationData: props.animationData
      })
      lottie.setSpeed(props.animationSpeed)
    }

    onMounted(() => {
      initLottie()
    })

    return {
      animation
    }
  },
})
</script>
