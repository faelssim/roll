<script>
import { createVNode, inject } from 'vue'
export default {
    name: 'Card',
    props: {
        name: String
    },
    setup (props, { slots, expose }) {
        const useLocation = inject('location')
        const useValue = inject('value')
        const name = 'faelssim'
        function getConfig () {
            return { Id: '09s8sx' }
        }
        
        expose({
            getConfig
        })

        return () => createVNode('div', {}, [
            props.name > 10 ? slots.active() : slots.default({ value: 100, name }),
            createVNode('div', null, useLocation),
            createVNode('b', null, useValue.value)
        ])
    }
}
</script>