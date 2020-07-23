import { writable } from 'svelte/store'

function tasks() {
    const { subscribe, update } = writable(123)
    return {
        subscribe: subscribe,
        addTask: () => update((store) => 200),
    }
}

export default tasks()
