<template>
    <div class="login-popup">
        <div class="login-popup-content">
            You must login! {{ count.age }}
        </div>
        <button @click="handleChange">Change.</button>
    </div>
</template>

<script>
import { reactive, shallowRef, toRefs, ref } from '@vue/reactivity'
export default {
    setup() {
        const state = reactive({
            name: 'faelssim'
        })
        const stateToRefs = toRefs(state)
        const count = ref({})
        const count2 = shallowRef(1)
        console.log(count, count2)
        const handleChange = () => {
            // stateToRefs.name.value = 'Huuuoo'
            count.value = { age: 200 }
        }
        return {
            count,
            stateToRefs,
            handleChange
        }
    }
}
</script>

<style scoped>
.login-popup{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,.6);
}
.login-popup-content{
    width: 400px;
    padding: 15px 0;
    text-align: center;
    border-radius: 5px;
    background: #fff;
}
</style>