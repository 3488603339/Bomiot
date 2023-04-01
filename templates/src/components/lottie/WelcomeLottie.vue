<template>
  <div id="welcomelottie"></div>
</template>

<script>
import lottie from 'lottie-web'
import welcomelottie from './welcome.json'
import { defineComponent, onMounted, ref } from "vue"

export default defineComponent({
  name: 'WelcomeLottie',
  props: {
    animationData: {
      type: Object,
      default: welcomelottie
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
        container: document.getElementById("welcomelottie"),
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
