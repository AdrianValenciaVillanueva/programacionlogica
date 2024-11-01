<template>
    <div class="tarea-container">

        <div class="col-mitad">
            <div class="row">
                <p class="texto">
                    {{task.description}}
                </p>
            </div>

            <div class="row">
                <div class="twocolumns">
                    <b>Fecha de publicacion:</b>
                    <span>{{ task.created_at }}</span>
                </div>
                <div class="twocolumns">
                    <b>Fecha de Entrega:</b>
                    <span>{{ task.deadline }}</span>
                </div>
            </div>
        </div>

        <div class="col-mitad">

            <div class="select-users">
                <button class="btn-form">usuarios asignados</button>
                <button class="btn-form">no entregados</button>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'ItemTarea', 
    components: {
    },
    data() {
        return { 

        }
    },
    props: {
        task: {
            type: Object,
            required: true
        }
    }
};
</script>
<style scoped>
* {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
}
.tarea-container {
    width: auto;
    padding: 15px;
    background-color: #f9f9f9;
    display: flex;
    border-radius: 5px;
    justify-content: left;
    align-items: stretch;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}
.col-mitad {
    width: 50%;
}
.row {
    width: 100%;
}
.texto {
    font-size: 1em;
    font-weight: lighter;
    color: black;
    text-align: justify;    
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.twocolumns {
    display: grid;
    width: 100%;
    text-align: left;
    grid-template-columns: 1fr 1fr;
}
.twocolumns:nth-child(1) {
    padding-bottom: 15px;
}
.twocolumns span {
    text-align: right;
    color: #878787;
}
.twocolumns b, .twocolumns span {
    font-size: 0.8em;
}
.twocolumns b {
    color: black;
}
.select-users {
    display: flex;
    flex-direction: column;
    height: 100%;
    border: red 1px solid;
    gap: 2.5rem;
    width: 100%;
    justify-content: center;
    align-items:center;
}
.select {
    width: 60%;
}
.btn-form {
  border-radius: 10px;
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 3px 0 rgb(0, 0, 0, 0.2);
  background-color: #062743;
  font-size: 0.8em;
  width: 8em;
  text-align: center;
  height: 3rem;
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

</style>
