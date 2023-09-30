<template>
    <div>
        <adm :msg="msg" />
    </div>
</template>


<script>
import adm from '../components/Admin.vue'

export default {
    components: {
        adm,
    },
    props: {
        msg: String
    }
}

</script>