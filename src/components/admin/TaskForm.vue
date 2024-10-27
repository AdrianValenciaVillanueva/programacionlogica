<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-half">
          <h4>TITULO</h4>
            <input type="text" v-model="fullName" />
        </div>
        <div class="col-half">
          <h4>ASIGNACION DE USUARIOS</h4>
              <VueSelect multiple v-model="selected" :options="items" :closeOnSelect="false"/>
        </div>
      </div>

      <div class="row">
        <div class="col-half">
          <h4>DESCRIPCIÓN</h4>
          <div class="input-group">
            <textarea name="desc-task" id="desc-task"></textarea>
          </div>
        </div>
        <div class="col-half">
          <h4>FECHA LIMITE DE ENTREGA</h4>
          <div class="input-group">
            <!-- Poner datepicker aqui -->
              <VueDatePicker v-model="date" :format="format" :min-date="new Date()" teleport-center/>
          </div>
        </div>

      </div>
      <div class="row">
        <div class="btn-container">
          <button type="submit" class="btn-form">CREAR TAREA</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>

import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import VueSelect from 'vue-select';

export default {
  components: {
    VueDatePicker,
    VueSelect,
  },
  data() {
    return {
      email: '',
      password: '',
      descripcion: '',
      date: ref(new Date()),
      selected: '',
      abc: ['a','b','c','d','e','asdf','bz','ae','32','19','assff'],
    };
  },
  methods: {
    format(date){
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();
      const hours = `${date.getHours()}:${date.getMinutes()}`

      return `${day}/${month}/${year} a las ${hours}`;
    }
  },
  computed: {
    items() {
      return this.abc.filter(i => !this.selected.includes(i));
    }
  }
};

</script>
<style scoped>
@import "vue-select/dist/vue-select.css";
/* 64ac15 */
*,
*:before,
*:after {
  box-sizing: border-box;
}
body {
  padding: 1em;
  font-family: "Roboto", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 15px;
  color: #b9b9b9;
  background-color: #e3e3e3;
}
h4 {
  color: #113A5D;
}
textarea, input,
input[type="radio"] + label,
input[type="checkbox"] + label:before,
select option,
select {
  width: 100%;
  padding: 0.4em 1em;
  line-height: 1.4;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
}
textarea, input {
  font-size: 0.8em;
}
textarea:focus, input:focus {
  outline: 0;
  border-bottom: #062743 2px solid;
  transition: 30ms;
}
textarea {
  resize: vertical;
}

.container {
  padding: 0em 3em 2em 3em;
  margin: 0em auto;
  width: 100%;
  height: auto;
  background-color: #f9f9f9;
  border-radius: 4.2px;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.05);
}
.row {
  zoom: 1;
}
.row:before,
.row:after {
  content: "";
  display: table;
}
.row:after {
  clear: both;
}
.col-half {
  padding-right: 10px;
  float: left;
  width: 50%;
}
.col-half:last-of-type {
  padding-right: 0;
}
.col-third {
  padding-right: 10px;
  float: left;
  width: 33.3333333333%;
}
.col-third:last-of-type {
  padding-right: 0;
}
.btn-form {
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 0 2px 3px 0 rgb(0, 0, 0, 0.2);
  background-color: #062743;
  width: auto;
  height: auto;
  margin-top: 4em;
  padding: 1rem;
  color: #f9f9f9;
}
.btn-form:hover {
  background-color: #C4FFDD;
  color: #113A5D;
  transition: 200ms all;
}
.btn-form:active {
  background-color: #113A5D;
  color: #f9f9f9;
  transition: 20ms;
}

h4, span, .btn-container {
  padding-top: .4em;
}

.btn-container {
  display: flex;
  justify-content: center;
}

.row h4 {
  font-size: 1em;
}
.row input {
  font-size: 0.9em;
  height: auto;
}

.v-select, textarea, input, h4 {
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
}

.v-select {
  font-size: 1em;
}

.v-select .vs__dropdown-menu {
  max-height: calc(100vh - 20px); /* Ajusta el height del dropdown dejando 20px antes del final de la página */
  overflow-y: auto; /* Habilita el scrollbar vertical */
  background-color: #f9f9f9; /* Opcional: Cambia el color de fondo */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); /* Opcional: Sombra para el dropdown */
  border-radius: 5px;
}
/* Estilo para el campo de entrada */

@media (max-width: 650px) {
  .col-half {
    width: 100%;
    padding-right: 0;
  }
}
@media (max-width: 590px) {
  .row h4{
    font-size: 0.9em;
  }
  .v-select, .row input, textarea{
    font-size: 0.8em;
  }

}
@media (min-height: 1200px), (min-width: 1815px) {
  .row h4{
    font-size: 1.9em;
  }
  .v-select, .row input, textarea{
    font-size: 1.8em;
  }
  .btn-form {
    font-size: 2em;
  }
}
</style>
