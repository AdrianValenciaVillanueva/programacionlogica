<template>
    <div class="usuarios-container" id="usuarios-container">
        <button class="btn-salir">Salir</button>
        <div class="page-wrapper" id="page-wrapper">
            <div class="titulo" id="titulo">
                <h1>{{ title }}</h1>
            </div>
            <section class="no-entregados">
                <h2>No entregaron</h2>
                <hr>

                <div v-if="usersPending.length > 0">
                    <div v-for="user in usersPending" :key="user.id" class="users">
                        <img src="../../../assets/profile.png" alt="">
                        <h3><b>{{ user.username }}</b></h3>
                    </div>
                </div>
                <div v-else>
                    <h3>No hay usuarios pendientes</h3>
                </div>
            </section>

            <section class="entregados">
                <h2>Entregados</h2>
                <hr>
                <div v-if="usersSent.length > 0" class="iter">
                    <div v-for="user in usersSent" :key="user.id" class="users">
                        <img src="../../../assets/profile.png" alt="imagen">
                        <h3><b>{{ user.username }}</b></h3>
                    </div>
                </div>
                <div v-else>
                    <h3>No hay tareas entregadas</h3>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    components: {
    },
    data() {
        return {
            title: '',
            usersSent: [],
            usersPending: [],
        }
    },
    methods: {
        loadUsers() {
            const teamId = this.$route.params.teamId;
            axios.get(`http://127.0.0.1:8000/tasks/team/${teamId}`)
            .then(response => {
                const tasks = response.data.filter(u => u.title === this.title);
                console.log(tasks);

                let pendingIds = [];
                let sentIds = [];

                for (const task of tasks) {
                    if (task.status === "pending") {
                        pendingIds.push(task.user_id);
                    }
                    else if (task.status === "completed") {
                        sentIds.push(task.user_id);
                    }
                }
                console.log('enviados', sentIds);
                console.log('pendientes', pendingIds);
                
                sentIds.forEach(id => {
                    axios.get(`http://127.0.0.1:8000/users/${id}`)
                    .then(response => {
                        this.usersSent.push(response.data);
                    })
                    .catch(error => {
                        console.error('Error obteniendo usuario id', error);
                    });
                });

                pendingIds.forEach(id => {
                    axios.get(`http://127.0.0.1:8000/users/${id}`)
                    .then(response => {
                        this.usersPending.push(response.data);
                    })
                    .catch(error => {
                        console.error('Error obteniendo usuario id', error);
                    });
                });
            })
            .catch(error => {
                console.error('Error consiguiendo usuarios en tarea', this.title, error);
            });
        },
    },
    mounted() {
        this.loadUsers();
        this.title = this.$route.params.tarea;
    },
}
</script>
<style scoped>
* {
    background-color: #f9f9f9;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    color: black;
}
.usuarios-container {
    display: flex;
    position: relative;
    justify-content: center;
}
.page-wrapper {
    display: block;
    width: 53%;
    height: auto;
    margin-bottom: 2rem;
    margin-top: 2rem;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 8px;
}
.linea{
    min-height: 10px;
    min-width: 100%;
    background-color: black;
}
.titulo {
    margin-bottom: 2rem;
}
.titulo, section {
    text-align: left;
}
h1 {
    font-size: 2.5em;
}
h2 {
    font-size: 1.5em;
}
h3 {
    font-size: 1.1em;
}

section img {
    width: 2rem;
    height: 2rem;
    background-color: black;
    border-radius: 100%;
}

.users {
    display: grid;
    grid-template-columns: 1fr 5fr;
    margin-bottom: 1.5rem;
}
.no-entregados {
    margin-bottom: 4rem;
}
.btn-salir {
    background-color: red;
    color: white;
    position: absolute;
    width: 4rem;
    top: 0;
    left: 0;
    margin-left: 2rem;
    margin-top: 2rem;
    padding: 1rem;
    border-radius: 6px;
    height: auto;
}
</style>