<template>
  <div>
    <ul>
      <li>message1</li>
      <li>message2</li>
    </ul>
    <el-button type="primary" disabled>主要按钮</el-button>
    <el-button type="primary" round>主要按钮</el-button>
    <h2>{{$store.state.count}}</h2>
    <button v-on:click="increase(12)">+</button>

    <p>{{$store.getters.moreAgeStu(16)}}</p>
  </div>
</template>

<script>
    export default {
        name: "Messages",
        data() {
            return {
                message1: "hello world",
                message2: "你好，世界！"
            }
        },
        methods: {
            increase(num) {
                this.axios.get("/category/all").then(response => {
                    console.log(response);
                });
                console.log(this);
                this.$store.commit('countIncrease',num);
            }
        }
    }
</script>

<style scoped>

</style>
