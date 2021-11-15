<template>
  <button @click="handleOpenLogin">Open Login</button>
  <input type="text" v-model="query" @input="handleFilterByInput" />
  <ul>
    <li v-for="item of results" :key="item.title">{{ item.title }}</li>
  </ul>
  <Card ref="cardRef" :name="query">
      <template #default="{ value, name }">
          <p>Unsupport this. {{ name }} {{ value }}</p>
      </template>
      <template #active>
          <p>Support this</p>
      </template>
  </Card>
  <login-popup v-if="loginVisible"></login-popup>
</template>

<script>
import { ref } from "@vue/reactivity";
import { defineAsyncComponent, provide } from '@vue/runtime-core';
import useFilter from "../hooks/useFilter";
import Card from "./components/Card";
const PERSONS = [
    { title: "faelssim", age: 30 },
    { title: "jack", age: 30 },
    { title: "moon", age: 30 },
    { title: "gold", age: 30 },
    { title: "animal", age: 30 },
];
export default {
    components: {
        Card,
        LoginPopup: defineAsyncComponent(() => import('./components/LoginPopup'))
    },
    setup() {
        const query = ref("")
        const cardRef = ref(null)
        const loginVisible = ref(false)
        const { results, filterMethods } = useFilter(PERSONS)
        const handleFilterByInput = () => {
            filterMethods(query.value)
        }
        const handleOpenLogin = () => {
            loginVisible.value = true
        }
        provide('location', 'SuZhou SSIC PARk.')
        provide('value', query)
        return {
            query,
            results,
            handleFilterByInput,
            cardRef,
            loginVisible,
            handleOpenLogin
        };
    },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul{
    box-sizing: border-box;
    padding: 5px 10px;
    border-radius: 10px;
    background: deepskyblue;
    color: #fff;
}
li{
    text-align: left;
    padding: 5px 0;
}
</style>
