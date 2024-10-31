<template>
    <div class="page-wrapper">
        <nav class="navbar-admin" id="navbar-admin" role="navigation">
                <div class="team-and-id-obj">

                    <div class="imgtext">
                        <img src="./../../assets/id.png" alt="codigo">
                        <span>{{ user.id }}</span>
                    </div>

                    <div class="imgtext">
                        <img src="./../../assets/team.png" alt="equipo">
                        <span>{{ user.id_team }}</span>
                    </div>

                    <div class="imgtext">
                        <img src="./../../assets/profile.png" alt="admin">
                        <span>{{user.username}}</span>
                    </div>

                </div>
        </nav>

        
        <main >
            <SimpleTab @selected-tab="getTab" class="tab"/>

            <router-view class="tab-result-content" id="tab-result-content"/>

            <!-- <div class="tab-result-content" id="tab-result-content">
                <TaskForm v-if="currentTab === 'CREAR TAREAS'" class="form"/>
                <SeeTasks v-else-if="currentTab === 'VER TAREAS'">
                </SeeTasks>
            </div> -->
        </main>
    </div>
</template>

<script>
// import TaskForm from './TaskForm.vue';
//import ImagenConLabel from './utils/ImagenConLabel.vue';
import axios from 'axios';
// import SeeTasks from './SeeTasks.vue';
import SimpleTab from './utils/SimpleTab.vue';

export default {
    name: 'HomeAdmin',
    components: {
        SimpleTab,
        // TaskForm,
        // SeeTasks
    }, 
    data() {
        return {
            user: {
                id: String,
                username: String,
                is_admin: Boolean,
                id_team: String,
            },
            currentTab: ''
        };
    },
    methods: {
        getTab(tab) {
            if (tab === 'CREAR TAREAS') {
                this.$router.push(
                    {name: 'crear-tareas', 
                    params: {teamId: this.user.id_team}});
            }
            else if(tab === 'VER TAREAS') { 
                this.$router.push({
                    name: 'ver-tareas', 
                    params: {teamId: this.user.id_team}});
            }
        }
    },
    mounted() {
        console.log("id del user cargado =",this.$route.params.userId);

        const userId = this.$route.params.userId;

        axios.get(`http://127.0.0.1:8000/users/${userId}`)
        .then(response => {
            this.user = response.data;
        })
        .catch(error => {
            console.error(`error obteniendo usuario admin ${error}`);
        });
    },
}
</script>

<style scoped>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.page-wrapper {
    margin-top: -8px;
    background-color: #f9f9f9;
} 
.navbar-admin {
    position: fixed;
    width: 100%;
    z-index: 1000;
    left: 0;
    top: 0;
    background-color: #062743;
    height: 14.7vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f9f9f9;
}

.team-and-id-obj  {
    display: flex;
    width: auto;
    gap: 5em;
    align-items: center;
    justify-content: center;
}
main {
    margin-top: 15vh;
    overflow: hidden;
}

.tab-result-content {
    height: auto;
}
.form {
    margin-top: 1.7vh;
}
.imgtext {
    display: flex;
    align-items: center;
    justify-content: left;
    font-size: 1em;
    float: left;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    gap: 12px;
}
.imgtext img {
    width: 2em;
    height: 2em;
}
@media (max-width: 590px) {
    main {
        margin-top: 5px;
    }
    .tab-result-content h4{
        font-size: 5px;
    }
    .navbar-admin{
        top: 5;
        position: relative;
        padding: 2em;
        height: auto;
    }
    .team-and-id-obj {
        flex-flow: column;
        font-size: 0.8rem;
        gap: 15px;
    }
    .imgtext {
        gap: 10px
    }
    .imgtext img {
        left: 0;
    }
}
@media (min-height: 1100px), (min-width: 1815px){
    .tab-result-content h4{
        font-size: 5px;
    }
    .team-and-id-obj {
        font-size: 1.8em;
    }
    .imgtext {
        gap: 10px
    }
    .imgtext img {
        left: 0;
    }
}
</style>