
<template>

<div class="PanelTareasEquipoPendientes">
  <div class="Titulos">
    <h2>Equipo: nopmbre equipo</h2>
    <h2>Usuario: usuario</h2>    
  </div>

  <div class="BotonesTipoTareas">
    <button class="BotonesTipo" @click="showPendingTasks">Tareas Pendientes</button>
    <button class="BotonesTipo" @click="showCompletedTasks">Tareas Hechas</button>
  </div>

  <div class="PanelTareas">

    <!-- TARJETAS DE TAREAS -->
     <div class="TareaPendiente">

      <div class="TituloTarea">
        <h2>Titulo:Tarea1</h2>
      </div>
      <div class="Fechas">
        <h2> Fecha Publcacion:</h2>
        <h2> Fecha Limite:</h2>
      </div>

      <div class="DecripccionTarea">  
        
      </div>
     </div>

  </div>
</div>
</template>

<script>
export default {
  name: 'PanelEquipoTareas',
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style> 
