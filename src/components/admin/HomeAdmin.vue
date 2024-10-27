<template>
    <div class="page-wrapper">
        <nav class="navbar-admin" id="navbar-admin" role="navigation">
                <div class="team-and-id-obj">

                    <div class="imgtext">
                        <img src="./../../assets/id.png" alt="codigo">
                        <span>Id</span>
                    </div>

                    <div class="imgtext">
                        <img src="./../../assets/team.png" alt="equipo">
                        <span>Equipo</span>
                    </div>

                    <div class="imgtext">
                        <img src="./../../assets/profile.png" alt="admin">
                        <span>Usuario</span>
                    </div>

                </div>
        </nav>

        
        <main >
            <SimpleTab @selected-tab="getTab" class="tab"/>

            <div class="tab-result-content" id="tab-result-content">
                <TaskForm v-if="currentTab === 'CREAR TAREAS'" class="form"/>
                <SeeTasks v-else-if="currentTab === 'VER TAREAS'">
                </SeeTasks>
            </div>
        </main>
    </div>
</template>

<script>
import TaskForm from './TaskForm.vue';
//import ImagenConLabel from './utils/ImagenConLabel.vue';
import SeeTasks from './SeeTasks.vue';
import SimpleTab from './utils/SimpleTab.vue';

export default {
    name: 'HomeAdmin',
    components: {
        SimpleTab,
        TaskForm,
        SeeTasks
    }, 
    data() {
        return {
            admin: 'admin',
            codigo: 'codigo',
            equipo: 'equipo',
            currentTab: ''
        };
    },
    user: {
        username: String,
        password: String,
        is_admin: Boolean,
        id_team: String,
    },
    methods: {
        getTab(tab) {
            this.currentTab = tab;
        }
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.page-wrapper {
    width: 100%;
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
    width: 100%;
    overflow: hidden;
    height: calc(100% - 14.7vh); /* Ajusta la altura para ocupar el resto de la pantalla */

}

.tab-result-content {
    width: 100%;
    height: 100%;
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