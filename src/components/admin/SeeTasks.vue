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
        let keyValue = (v1, v2) => `${v1},${v2}`;

        const team_id = this.$route.params.teamId;
        axios.get(`http://127.0.0.1:8000/tasks/team/${team_id}`)
        .then(response => {
            let uniqueTasks = new Map();
            const respApi = response.data;
            respApi.forEach(t => {
                let apiValue = keyValue(t.title, t.description);
                if (!uniqueTasks.has(apiValue)) {
                    this.tasks.push(t);
                    uniqueTasks.set(apiValue, true);
                }
            });
            console.log('tareas publicadas', this.tasks);
            // this.tasks = response.data;
            
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
    height: auto;
    background-color: #f9f9f9;
    justify-content: center;
    font-family: Helvetica, sans-serif;
}
.content-container {
    display: block;
    margin: 0 auto;
    width: 85%;
    height: auto;
    padding: 2em 4em 0em 4em;
    gap: 20px;
}
.content-container:target .content{
    max-height: 20000rem;
}

.dropdownitems {
    margin-top: 20px;
    list-style: none;
    width: 100%;
    transition: all 690ms;
}

@media (max-width: 850px) {
    .content-container {
        padding-right: 0.1rem;
        padding-left: 0.1rem;
    }
}

@media (max-width: 650px) {
    .content-container {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
}
</style>