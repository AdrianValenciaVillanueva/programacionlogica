<template>
    <div class="page-wrapper">
        <ul>
            <li v-for="(tab, index) in tabs"
                :key="index"
                :class="{ active: selectedTab === index }"                 
                @click="selectTab(index)">
                {{ tab }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'SimpleTab',
    props: {
    },
    data() {
        return {
            selectedTab: null,
            tabs: ['agregar tareas', 'tareas definidas'],  // Los tabs que se mostrarán
            hoverClass: {
                type: String,  // Se define como string para recibir una clase desde el padre
                default: ''
            }
        }
    },
    methods: {
        selectTab(index) {
            this.selectedTab = index;
            this.$emit('selected-tab', this.tabs[index]);
        }
    }
};
</script>

<style scoped>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
ul {
    display: flex;
    list-style-type: none;
    width: 100%;
    height: 10vh;
    justify-content: flex-start;
    box-shadow: 0px 1px 15px 2px rgb(0, 0, 0, 0.2);
    align-items: center;
}

li {
    list-style-type: none;
    padding: 0 50px;
    height: 100%;
    font-size: 1em;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease;
    font-family: 'Roboto', Verdana, Geneva, Tahoma, sans-serif;
}

li.active {
    border-bottom: 0.5vh solid black;
}
</style>
