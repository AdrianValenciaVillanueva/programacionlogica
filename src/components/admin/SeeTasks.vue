<template>
    <div class="page-wrapper">
        <div class="content-container" id="content-container">
            <TitleAccordeon :tasks="tasks"/>
        </div>
    </div>
</template>

<script>
// import ItemTarea from './utils/ItemTarea.vue';
import axios from 'axios';
import TitleAccordeon from './utils/TitleAccordeon.vue';

export default {
    // name: 'SeeTasks',
    components: {
        TitleAccordeon,
        // ItemTarea,
    },
    data() {
        return {
            tasks: [],
            isRotated: false,
        }
    },
    methods: { 
        toggleDropDown() {
            this.isRotated = !this.isRotated;
        },
    },
    mounted() {
        axios.get(`http://127.0.0.1:8000/tasks`)
        .then(response => {
            this.tasks = response.data;
            console.log('tareas publicadas', this.tasks);
            
        })
        .catch(error => {
            console.error(`ocurrio un error durante la obtencion de tareas`, error);
            
        });
    },
};

</script>
<style scoped>
* {
    padding: 0;
    margin: 0;
}
.page-wrapper {
    display: flex;
    background-color: #f9f9f9;
    justify-content: center;
    font-family: Helvetica, sans-serif;
}
.content-container {
    display: block;
    margin: 0 auto;
    width: 85%;
    padding: 2em 4em 0em 4em;
    gap: 20px;
}
.titulo {
    display: flex;
    position: relative;
    align-items: center;
    text-decoration: none;
    justify-content: space-between;
    cursor: pointer;
    padding: 15px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 4px;
}
.titulo h1 {
    font-size: 1.8rem;
    text-align: left;
}
.titulo img {
    width: 1.8rem;
    height: 2.7rem;
    transition: transform 0.3s ease;
}
.titulo img.rotated {
    transform: rotate(180deg);
}
.titulo:hover {
    background-color: #dde1e6;
}
.titulo:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
}
.content {
    overflow: hidden;
    max-height: 0;
    position: relative;
    transition: max-height 650ms;
}
.content-container:target .content{
    max-height: 20rem;
}

.dropdownitems {
    margin-top: 20px;
    list-style: none;
    width: 100%;
    transition: all 200ms;
}
</style>