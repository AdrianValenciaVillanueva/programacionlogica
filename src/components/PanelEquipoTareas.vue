<template>
  <body>
    <div class="Titulos" role="banner" aria-label="Título del panel">
      <div class="apTitulo" aria-labelledby="equipoTitulo">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
        </svg>
        <h2 id="equipoTitulo">Equipo</h2>
      </div>
      <div class="apTitulo" aria-labelledby="usuarioTitulo">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
        </svg>
        <h2 id="usuarioTitulo">Usuario</h2>
        <router-link to="/">
        <button class="logOutButton" aria-label="Cerrar sesión" @click="logout">
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
  </svg>
  <span >Log out</span>
</button></router-link>

      </div>
    </div>

    <div class="PanelTareasEquipoPendientes" role="region" aria-labelledby="panelTareasTitulo">
      <h2 id="panelTareasTitulo" class="visually-hidden">Panel de Tareas</h2>

      <div class="BotonesTipoTareas" role="group" aria-label="Tipo de tareas">
        <button 
          class="BotonesTipo" 
          @click="mostrarTareasPendientes = true"
          :class="{ active: mostrarTareasPendientes }" 
          aria-pressed="true"
        >
          Tareas Pendientes
        </button>
        <button 
          class="BotonesTipo" 
          @click="mostrarTareasPendientes = false"
          :class="{ active: !mostrarTareasPendientes }" 
          aria-pressed="false"
        >
          Tareas Hechas
        </button>
      </div>

      <div class="PanelTareas">
        <!-- Transición para el contenido -->
        <div v-if="mostrarTareasPendientes" key="pendientes" class="mostrarTareasPendientes" role="tabpanel" aria-labelledby="tareasPendientes">
          <h3 id="tareasPendientes" class="visually-hidden">Tareas Pendientes</h3>
          
          <div v-for="tarea in tareasPendientes" :key="tarea.id" class="TareaPendiente" role="article" :aria-labelledby="'tarea' + tarea.id + 'Titulo'">
            <div class="TituloTarea" :id="'tarea' + tarea.id + 'Titulo'">
              <h2>Título: {{ tarea.title }}</h2>
            </div>
            <div class="PanelContenedor">
              <div class="InfoTarea">
                <div class="Fechas" role="doc-info">
                  <p><span>Fecha Publicación:</span> {{ tarea.created_at }}</p>
                  <p><span>Fecha Límite de entrega:</span> {{ tarea.deadline }}</p>
                </div>
                <div class="DescripcionTarea">
                  <h3>Descripción:</h3>
                  <div class="textoDescripcion">
                    <p>{{ tarea.description }}</p>
                  </div>
                </div>
              </div>

              <div class="Botones">
                <button class="boton" aria-label="Descargar tarea">
                  <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="40px" fill="currentColor" class="bi bi-file-earmark-arrow-down-fill" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1m-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0"/>
                  </svg>
                </button>
                <button class="boton" aria-label="Marcar tarea como hecha" @click="marcarTareaComoHecha(tarea.id)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="auto" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="auto" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>

        <div v-else key="hechas" class="mostrarTareasHechas" role="tabpanel" aria-labelledby="tareasHechas">
          <h3 id="tareasHechas" class="visually-hidden">Tareas Hechas</h3>
          
          <div v-for="tarea in tareasHechas" :key="tarea._id" class="TareaHecha" role="article" :aria-labelledby="'tareaHecha' + tarea._id + 'Titulo'">
            <div class="TituloTarea" :id="'tareaHecha' + tarea._id + 'Titulo'">
              <h2>Título: {{ tarea.title }}</h2>
            </div>
            <div class="PanelContenedor">
              <div class="InfoTarea">
                <div class="Fechas" role="doc-info">
                  <p><span>Fecha Publicación:</span> {{ new Date(tarea.created_at).toLocaleDateString() }}</p>
                  <p><span>Fecha Límite de entrega:</span> {{ new Date(tarea.deadline).toLocaleDateString() }}</p>
                  <p><span>Fecha entregada:</span> {{ new Date(tarea.updated_at).toLocaleDateString() }}</p>
                </div>
                <div class="DescripcionTarea">
                  <h3>Descripción:</h3>
                  <div class="textoDescripcion">
                    <p>{{ tarea.description }}</p>
                  </div>
                </div>
              </div>
              <div class="Botones">
                <button class="boton" aria-label="Descargar tarea">
                  <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="25px" fill="currentColor" class="bi bi-file-earmark-arrow-down-fill" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1m-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      mostrarTareasPendientes: true, // Estado inicial para mostrar tareas pendientes
      tareasPendientes: [],
      tareasHechas: [],
      user: {
        id: '',
        username: '',
        is_admin: false,
        id_team: '',
      },
    };
  },

  methods: {
  async obtenerTareas() {
    try {
      console.log('Obteniendo tareas del usuario:', this.user.id);
      const response = await axios.get(`http://127.0.0.1:8000/tasks/user/${this.user.id}`);
      const tareas = response.data;
      this.tareasPendientes = tareas.filter(tarea => tarea.status === 'pending');
      this.tareasHechas = tareas.filter(tarea => tarea.status === 'completed');
      console.log('Tareas obtenidas:', tareas);
    } catch (error) {
      if (error.response) {
        console.error('Error al obtener las tareas:', error.response.data);
        this.errorMessage = 'Error al obtener las tareas: ' + JSON.stringify(error.response.data.detail);
      } else {
        console.error('Error al obtener las tareas:', error.message);
        this.errorMessage = 'Error al obtener las tareas: ' + error.message;
      }
    }
  },

  async marcarTareaComoHecha(task_id) {
    try {
      console.log('Marcando tarea como hecha:', task_id);
      const response = await axios.put(`http://127.0.0.1:8000/tasks/${task_id}/completed`);
      console.log('Tarea marcada como hecha:', response.data);
      // Actualizar la lista de tareas después de marcar como hecha
      this.obtenerTareas();
    } catch (error) {
      if (error.response) {
        console.error('Error al marcar la tarea como hecha:', error.response.data);
        this.errorMessage = 'Error al marcar la tarea como hecha: ' + JSON.stringify(error.response.data.detail);
      } else {
        console.error('Error al marcar la tarea como hecha:', error.message);
        this.errorMessage = 'Error al marcar la tarea como hecha: ' + error.message;
      }
    }
  },

  async obtenerUsuario(userId) {
    try {
      console.log('Obteniendo usuario:', userId);
      const response = await axios.get(`http://127.0.0.1:8000/users/${userId}`);
      this.user = response.data;
      console.log('Usuario obtenido:', this.user);
    } catch (error) {
      console.error('Error al obtener el usuario:', error);
    }
  },
},

mounted() {
  const userId = this.$route.params.userId;
  if (userId) {
    this.obtenerUsuario(userId).then(() => {
      this.obtenerTareas();
    });
  } else {
    console.error('No se encontró userId en los parámetros de la ruta');
  }
},
};
</script>

<style scoped>
*{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body{
  margin: 0; /* Elimina el margen predeterminado */
  padding: 0; /* Elimina cualquier relleno predeterminado */
}

.mostrarTareasPendientes, .mostrarTareasHechas{
  justify-content: center;
  display: flex;
  /* colocar en columna */
  flex-direction: column;
  overflow-x: hidden;
  align-content: center;
  gap: 16px; /* Espacio entre tareas */
  margin: 0 auto;
}


.PanelTareasEquipoPendientes {
  padding: 0;

  width: 95%;
  min-height: 600px;
  /* max-width: 1080px; */
  margin: auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.Titulos {
  background-color: #003b6f;
  color: white;
  margin: 0;
  height: 80px;
  display: flex;               /* Habilita flexbox */
    justify-content: center;     /* Centra horizontalmente */
    align-items: center;         /* Centra verticalmente */
    margin: 0;
gap: 22%;
  /* border-bottom:1px solid #003b6f; */
}

.apTitulo{
display: flex;
  gap: 10px ;
}
.Titulos span{
  font-weight: bold;
}
.Titulos h2{
  font-size: 25px;

} 
button{
  font-family: Verdana, Geneva, Tahoma, sans-serif;

}
.BotonesTipoTareas {
  font-size: 16px;
  display: flex;
  justify-content: center;
  gap: 0 30%;
  margin-bottom: 20px;
}

.BotonesTipo {
  padding: 10px 20px;
  font-size: 18px;
  background: none;
  color: black;
  border: none;
  cursor: pointer;
  font-weight: bold;
  position: relative;
}

.BotonesTipo:not(.active)::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  border-bottom: 2px solid #003b6f;
  transform: scaleX(0);
  transition: transform 0.3s ease;
  transform-origin: left;
}

.BotonesTipo:not(.active):hover::before {
  transform: scaleX(1);
}

.BotonesTipo.active {
  color: black;
  border-bottom: 2px solid #003b6f;
  cursor: default;

}

/**=== */


.logOutButton {
  /* padding: 10px 20px; */
  font-size: 18px;
  background: none;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: bold;
  position: relative;
}

.logOutButton::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  border-bottom: 1px solid #ffffff;
  transform: scaleX(0);
  transition: transform 0.3s ease;
  transform-origin: left;
}

.logOutButton:hover::before {
  transform: scaleX(1);
}


.PanelTareas {
  display: flex;
  flex-direction: column;
  align-items: center;
  

}

.TareaPendiente, .TareaHecha {
  width: 80%;
  padding: 20px;
  padding-top: 0 ;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 3px 3px #113A5D;
  margin: 0 auto;
}

.PanelContenedor {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
}

.InfoTarea {
  flex: 3;
  margin-right: 20px;
}

.TituloTarea h2 {
  margin: 0;
  padding: 7px;
  font-size: 18px;
  color: #004b8d;
}

.Fechas p {
  margin: 5px 0;
  font-size: 14px;
  color: #666;
  text-align: left  ;
}

.DescripcionTarea {
  margin-top: 10px;
  min-height: 150px;
}

.DescripcionTarea h3 {
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  color: #004b8d;
}

.DescripcionTarea p {
  font-size: 14px;
  color: #333;
  text-align: justify;
}

.Botones {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  font-weight: bold;
  /* gap: 2em; */
  gap: 3rem;
}

.boton {
 
  width: 100px;
  height: 50px; 
  font-size: 14px;
  background-color: #003b6f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.boton:hover {
  background-color: #011f3a;
}


.TituloTarea{
  margin: 0 auto;
  background-color: #003b6f;
  width: 40%;
  max-width: 200px;
  border-radius: 0 0 5px 5px;
  margin-bottom: 10px;
} 
.TituloTarea h2{
color:white;

}
.Fechas{
  text-align: justify;
}
.Fechas span{
font-weight: bold;

}

.textoDescripccion{
  border: solid 2px #003b6f;
  padding: 3px;
  border-radius: 12px;
}



/*ANIMACION DE FADE-IN/OUT*/
/* .fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to  .fade-leave-active in versions <2.1.8  {
  opacity: 0;
} 

*/


.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateX(100%); /* Desliza desde la derecha */
}

</style>
