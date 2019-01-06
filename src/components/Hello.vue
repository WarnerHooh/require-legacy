<template>
    <div class="example">{{ msg }}</div>
</template>

<script>
import $ from 'jquery';
import Vue from 'vue';

export default {
    name: 'Hello',
    data () {
        return {
            msg: 'Hello world!'
        }
    },
    mounted: () => {
        console.log('$: ', $)
        console.log('Vue: ', Vue)
    }
}
</script>

<style scoped>
    .example {
        color: red;
    }
</style>