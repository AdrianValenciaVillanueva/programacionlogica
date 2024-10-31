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
                <button>usuarios asignados</button>
                <button>no entregados</button>
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
         task:   {
         "title": '', 
         "description": '', 
         "user_id": '', 
         "team_id": '', 
         "created_at": '', 
         "updated_at": '', 
         "deadline": '', 
         "status": '',
  },
        }
    },
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
    text-align: justify;    
}
.twocolumns {
    display: grid;
    width: 100%;
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
    font-size: 1.2em;
}
.select-users {
    display: flex;
    flex-direction: column;
    width: 5rem;
    height: 4rem;
    gap: 2.5rem;
    justify-content: center;
    align-items:center;
    margin: 0 auto;
    float: inline-end;
}
.select {
    width: 60%;
}
</style>
