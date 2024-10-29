<template>
    <div class="page-wrapper">
        <div class="content-container">
            <div class="titulo" @click="toggleDropDown">
                <h1>Tareas publicadas</h1>
                <img 
                src="../../assets/drop.png" 
                alt="dropdown"
                :class="{rotated: isRotated}"
                />
            </div>
            <ItemTarea v-if="this.isRotated === true"/>
        </div>
    </div>
</template>

<script>
import ItemTarea from './utils/ItemTarea.vue';

export default {
    name: 'SeeTasks',
    components: {
        ItemTarea,
    },
    data() {
        return {
            tasks: {
                all: [],
                pending: [],
                sent: [],

            },
            isRotated: false,
        }
    },
    methods: { 
        toggleDropDown() {
            this.isRotated = !this.isRotated;
        },
    }
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
    margin-top: 2em;
    width: 59%;
    padding: 0 4em 0em 4em;
    gap: 20px;
}
.titulo {
    display: flex;
    position: relative;
    align-items: center;
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
    background-color: #f2f2f2;
}
.titulo:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
}

.dropdownitems {
    margin-top: 20px;
    list-style: none;
    width: 100%;
    transition: all 200ms;
}
</style>