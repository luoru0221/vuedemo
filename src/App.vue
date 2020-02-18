<template>
  <div id="app">
    <Messages></Messages>
  </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import Messages from "./components/Messages";

    export default {
        name: 'app',
        components: {
            HelloWorld,
            Messages
        }
    }
</script>

<style>

</style>
