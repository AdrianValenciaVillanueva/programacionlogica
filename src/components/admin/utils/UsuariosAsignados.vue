<template>
    <div class="usuarios-container" id="usuarios-container">

        <header>
            <button class="btn-salir" @click="goBack">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg>
            </button>
        </header>

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
        <div class="grafico">
        <canvas id="entregaChart"></canvas>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
    components: {},
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
            return axios.get(`http://127.0.0.1:8000/tasks/team/${teamId}`)
                .then(response => {
                    const tasks = response.data.filter(u => u.title === this.title);
                    console.log(tasks);

                    let pendingIds = [];
                    let sentIds = [];

                    for (const task of tasks) {
                        if (task.status === "pending") {
                            pendingIds.push(task.user_id);
                        } else if (task.status === "completed") {
                            sentIds.push(task.user_id);
                        }
                    }
                    console.log('enviados', sentIds);
                    console.log('pendientes', pendingIds);

                    // Creamos arrays de promesas para las solicitudes de usuarios
                    const sentRequests = sentIds.map(id =>
                        axios.get(`http://127.0.0.1:8000/users/${id}`)
                            .then(response => {
                                this.usersSent.push(response.data);
                            })
                            .catch(error => {
                                console.error('Error obteniendo usuario id', id, error);
                            })
                    );

                    const pendingRequests = pendingIds.map(id =>
                        axios.get(`http://127.0.0.1:8000/users/${id}`)
                            .then(response => {
                                this.usersPending.push(response.data);
                            })
                            .catch(error => {
                                console.error('Error obteniendo usuario id', id, error);
                            })
                    );

                    // Retornamos Promise.all para asegurar que todas las solicitudes se completen
                    return Promise.all([...sentRequests, ...pendingRequests]);
                })
                .catch(error => {
                    console.error('Error consiguiendo usuarios en tarea', this.title, error);
                });
        },

        // Este método renderiza el gráfico
        renderChart() {
            const ctx = document.getElementById('entregaChart').getContext('2d');
            new Chart(ctx, {
                type: 'pie', // Puedes cambiar a 'bar' o 'doughnut' si prefieres
                data: {
                    labels: ['Entregados', 'No entregados'],
                    datasets: [{
                        label: 'Estado de Entrega',
                        data: [this.usersSent.length, this.usersPending.length],
                        backgroundColor: ['#4CAF50', '#F44336'],
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: {
                                font: {
                                    size: 18 // Tamaño de la fuente de la leyenda
                                }
                            }
                        },
                        title: {
                            display: true,
                            text: 'Usuarios que entregaron y no entregaron',
                            font: {
                                size: 22 // Tamaño de la fuente del título
                            }
                        }
                    },
                    scales: {
                        x: {
                            display: false, // Esto quita lo que rodea al circulo en x
                            ticks: {
                                font: {
                                    size: 16 
                                }
                            },
                            grid: {
                            display: false, //Se elimina la cuadricula respecto a x
                    }
                        },
                        y: {
                            display: false, //Esto quita lo que rodea al circulo en y
                            ticks: {
                                font: {
                                    size: 16 
                                }
                            },
                            grid: {
                                display: false, //Se elimina la cuadricula respecto a y
                    }
                        }
                    }
                }
            });
        },

        goBack() {
            this.$router.back();
        }
    },
    mounted() {
        this.title = this.$route.params.tarea;
        this.loadUsers().then(() => {
            // Configura el gráfico después de cargar los datos
            this.renderChart();
        }).catch(error => {
            console.error('Error al cargar usuarios o al renderizar el gráfico:', error);
        });
    }
}
</script>

<style scoped>
* {
    background-color: #f9f9f9;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    color: black;
}
.grafico {
    padding-top: 20px;
    width: 500px; /* Ajusta este valor según el tamaño que prefieras */
    height: 500px; /* Ajusta este valor según el tamaño que prefieras */
    text-align: center; /* Centra el contenido dentro del div */
}

.grafico canvas {
    width: 100%; 
    height: 100%; 
}



.usuarios-container {
    display: flex;
    flex-flow: column;
    align-items: center;
    position: relative;
    justify-content: center;
}
.page-wrapper {
    display: block;
    width: 53%;
    text-overflow: ellipsis;
    height: auto;
    margin-bottom: 2rem;
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
    background-color: transparent;
    border: none;
    width: auto;
    height: auto;
}

.btn-salir svg {
    width: 2rem;
    height: 2rem;
}

.btn-salir:hover svg {
    fill: #dde1e6;
    transition: all 350ms;
}
.btn-salir:active svg {
    fill: #808080;
    transition: 100ms;
}

header {
    width: 90%;
    padding: 0.5rem;
    display: flex; 
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
}

@media (max-width: 850px) {
    .page-wrapper {
        width: 85%;
        justify-self: stretch;
    }
    h3 {
        font-size: 0.7rem;
    }
    h2 {
        font-size: 1.1rem;
    }
    h1 {
        font-size: 1.6rem;
    }
}
@media (min-height: 1200px), (min-width: 1815px) {
  h2{
    font-size: 2.3em;
  }
  h3{
    font-size: 1.9em;
  }
  h1 {
    font-size: 2.8em;
  }
}
</style>