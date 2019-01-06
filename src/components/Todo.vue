<template>
    <div class="todo">{{ msg }}</div>
</template>

<script>
export default {
    name: 'Todo',
    data () {
        return {
            msg: 'TODO !!!'
        }
    }
}
</script>

<style scoped>
    .todo {
        color: blue;
    }
</style>