<template>
    <div class="home">
        <floor :msgc="msgc" :next_music="next_music" />
    </div>
</template>
  
<script>
import floor from '@/components/floor.vue'
export default {
    components: {
        floor
    },
    props: {
        msgc: Object,
        next_music: Function
    }
}
</script>
  