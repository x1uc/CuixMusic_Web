<template>
    <div class="home">
        <floor :msgc="msgc" :msg="msg" />
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
        msg: String
    }
}
</script>
  