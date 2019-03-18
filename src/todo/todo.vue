<template>
    <section class="real-app">
        <input
            type="text"
            class="add-input"
            autofocus="autofocus"
            placeholder="记录待办事项"
            @keyup.enter="addTodo"
        >
        <item
            :todo="todo"
            v-for="todo in filteredTodos"
            :key="todo.id"
            @del="deleteTodo"
        />
        <tabs
            :filter="filter"
            :todos="todos"
            @toggle="toggleFilter"
            @clearAllCompleted="clearAllCompleted"
        />
    </section>
</template>

<script>
import Item from './item.vue'
import Tabs from './tabs.vue'
let id = 0
export default {
    data() {
        return {
            todos: [],
            filter: '全部'
        }
    },
    components: {
        Item,
        Tabs,
    },
    computed: {
        filteredTodos() {
            if (this.filter === '全部') {
                return this.todos
            }
            const completed = this.filter === '已完成'
            return this.todos.filter(todo => completed === todo.completed)
        }
    },
    methods: {
        addTodo(e) {
            this.todos.unshift({
                id: id++,
                content: e.target.value.trim(),
                completed: false
            })
            // console.log(this.todos[0].content)
            e.target.value = ''
        },
        deleteTodo(id) {
             this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
        },
        toggleFilter(state) {
            this.filter = state
        },
        clearAllCompleted() {
            this.todos = this.todos.filter(todo => !todo.completed)
        }
    }
}
</script>

<style lang="stylus" scoped>
.real-app{
    width 600px
    margin 0 auto
    box-shadow 2px 2px 10px 1px #666
}
.add-input
    box-sizing border-box
    width 100%
    font-size 24px
    font-family inherit
    font-weight inherit
    line-height 2em
    outline none
    font-smoothing antialiased
    padding 16px 0
    padding-left 60px
    border:none
    border-bottom: 1px solid #ccc


</style>
