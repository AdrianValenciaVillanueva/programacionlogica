<template>
    <div class="page-wrapper">
        <nav class="navbar-admin" id="navbar-admin" role="navigation">
            <div class="team-and-id">
                <ImagenConLabel :img="require('@/assets/team.png')" :texto="equipo" class="size"/>
                <ImagenConLabel :img="require('@/assets/id.png')" :texto="codigo" class="size"/>
            </div>
            <ImagenConLabel :img="require('@/assets/profile.png')" :texto="admin" class="size" id="profile" />
        </nav>

        
        <main >
            <SimpleTab @selected-tab="getTab"/>

            <div class="tab-result-content" id="tab-result-content">
                <TaskForm v-if="currentTab === 'agregar tareas'"/>
            </div>
        </main>
    </div>
</template>

<script>
import TaskForm from './TaskForm.vue';
import ImagenConLabel from './utils/ImagenConLabel.vue';
import SimpleTab from './utils/SimpleTab.vue';

export default {
    name: 'HomeAdmin',
    components: {
        ImagenConLabel,
        SimpleTab,
        TaskForm
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
    width: inherit;
    height: inherit;
    background-color: #f9f9f9;
}
.navbar-admin {
    position: fixed;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: #062743;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    flex-flow: wrap;
    color: #f9f9f9;
}
.team-and-id {
    display: flex;
    width: 30vw;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 15.5vw;
    margin-left: 5vw;
}
.size {
    width: 7vw;
    height: 6vh;
}

#profile {
    margin-right: 15vw;
}

main {
    margin-top: 15vh;
}

.tab-result-content {
    width: inherit;
    height: 100vh;
}
</style>