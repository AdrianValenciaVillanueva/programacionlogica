<template>
  <div class="PanelTareasEquipoPendientes">
    <div class="Titulos">
      <h2> <span>Equipo:</span> nombre del equipo</h2>
      <h2><span>Usuario:</span> usuario</h2>
    </div>

    <div class="BotonesTipoTareas">
      <button class="BotonesTipo">Tareas Pendientes</button>
      <button class="BotonesTipo">Tareas Hechas</button>
    </div>

    <div class="PanelTareas">
      <!-- =================== TARJETAS DE TAREAS =================== -->
      <div class="TareaPendiente">
        <div class="TituloTarea">
          <h2>Título: Tarea 1</h2>
        </div>

        <div class="PanelContenedor">
          <div class="InfoTarea">
            <div class="Fechas">
              <p><span>Fecha Publicación:</span>  DD/MM/AA</p>
              <p><span>Fecha Límite de entrega:</span> DD/MM/AA</p>
            </div>

            <div class="DescripcionTarea">
              <h3>Descripción:</h3>
              <div class="textoDescripccion">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus sed eaque inventore perferendis.</p>
                
              </div>
            </div>
          </div>

          <div class="Botones">
            
            <button class="boton "> 
              <svg xmlns="http://www.w3.org/2000/svg" width=auto height=25px fill="currentColor" class="bi bi-file-earmark-arrow-down-fill" viewBox="0 0 16 16">
                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1m-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0"/>
              </svg>
              </button>
            <button class="boton ">
              <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="auto" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <!-- =========================================================== -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'PanelEquipoTareas',
};
</script>

<style scoped>
*{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.PanelTareasEquipoPendientes {
  width: 90%;
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.Titulos {
  display: flex;
  text-align: center;
  margin-bottom: 20px;
  justify-content: space-around;
  border-bottom:1px solid #003b6f;
}
.Titulos span{
  font-weight: bold;
}
.Titulos h2{
  font-size: 1rem;

} 

.BotonesTipoTareas {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.BotonesTipo {
  padding: 10px 20px;
  font-size: 14px;
  color: white;
  background-color: #004b8d;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.PanelTareas {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.TareaPendiente {
  width: 80%;
  padding: 20px;
  padding-top: 0 ;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 3px 3px #113A5D;

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
}

.DescripcionTarea {
  margin-top: 10px;
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
  /* gap: 2em; */
  gap: 3rem;
}

.boton {
  width: 70px;
  height: 35px;
  font-size: 14px;
  background-color: #004b8d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.boton:hover {
  background-color: #003b6f;
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
</style>
