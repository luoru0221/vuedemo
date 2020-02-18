import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
  //状态，即数据，类型Vue的data
  state: {
    students: [
      {id: '1', name: 'RuL', age: 20},
      {id: '2', name: 'zcb', age: 19},
      {id: '3', name: 'zlb', age: 18}
    ],
    count: 0
  },
  //状态管理，用于修改状态，类似Vue的methods
  mutations: {
    countIncrease(state, num) {
      state.count += num;
    }
  },
  //类似Vue的计算属性computed
  getters: {
    moreAgeStu(state) {
      return age => state.students.filter(s => s.age > age);
    }
  }

});

export default store;
