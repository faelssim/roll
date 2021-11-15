import { ref } from 'vue'
export default function useFilter (sourceData) {
    const results = ref([ ...sourceData ])
    const filterMethods = (query) => {
        results.value = sourceData.filter(item => item.title.includes(query))
    }
    return {
        results,
        filterMethods
    }
}