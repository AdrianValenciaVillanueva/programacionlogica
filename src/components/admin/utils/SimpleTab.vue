<template>
        <ul>
            <li v-for="(tab, index) in tabs"
                :key="index"
                :class="{ active: selectedTab === index }"                 
                @click="selectTab(index)">
                {{ tab }}
            </li>
        </ul>
</template>

<script>
export default {
    name: 'SimpleTab',
    props: {
    },
    data() {
        return {
            selectedTab: null,
            tabs: ['CREAR TAREAS', 'VER TAREAS'],  // Los tabs que se mostrarán
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
    justify-content: flex-start;
    box-shadow: 0px 1px 15px 2px rgb(0, 0, 0, 0.2);
    align-items: center;
}

li {
    list-style-type: none;
    padding: 15px 50px;
    height: 100%;
    width: 100%;
    font-weight: bold;
    font-size: 0.8rem;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease;
    font-family: 'Roboto', Verdana, Geneva, Tahoma, sans-serif;
    border-radius: 15px;
}
li:hover{
    background-color: #b9b9b9;
}

li.active {
    transition: 300ms;
    border-bottom: 0.5vh solid black;
    border-radius: 0;
    background-color: #f8f8f8;
}
@media (max-width: 590px) {
    ul {
        padding: 5px 0;
        flex-direction: column;
    }
    li {
        font-size: 0.7rem;
        padding: 10px;
    }
}
@media (min-height: 1200px), (min-width: 1815px) {
    li {
        font-size: 1.7rem;
    }
}
</style>

