<template>
    <div>
        <views :play_music="play_music" :msg="msg" />
    </div>
</template>

<script>
import views from '../components/searchview.vue'
export default {
    components: {
        views
    },
    props: {
        msgc: Object,
        msg: String,
        play_music: Function
    }
}
</script>
