<template>
  <div class="home">
    <HelloWorld :msg="msg" :play_music="play_music" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  components: {
    HelloWorld
  },
  props: {
    play_music: Function,
    msg: String
  }
}
</script>
