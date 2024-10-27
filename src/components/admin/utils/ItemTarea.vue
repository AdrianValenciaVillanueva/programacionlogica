<template>
    <div class="tarea-container">

        <div class="col-mitad">
            <div class="row">
                <p class="texto">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi quos harum commodi, asperiores, laborum saepe quod ab facilis fugiat omnis alias mollitia cupiditate possimus doloribus dignissimos suscipit animi, voluptas fuga.
                </p>
            </div>

            <div class="row">
                <div class="twocolumns">
                    <b>Fecha de publicacion:</b>
                    <span>DD/MM/Y</span>
                </div>
                <div class="twocolumns">
                    <b>Fecha de Entrega:</b>
                    <span>DD/MM/Y</span>
                </div>
            </div>
        </div>

        <div class="col-mitad">

            <div class="select-users">
                <SelectUser/>
                <SelectUser/>
            </div>
        </div>

    </div>
</template>

<script>
import SelectUser from './SelectUser.vue';
export default {
    name: 'ItemTarea', 
    components: {
        SelectUser
    },
    data() {
        return {
        }
    },
};
</script>
<style scoped>
* {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
}
.tarea-container {
    width: 100%;
    height: auto;
    background-color: #f9f9f9;
    display: flex;
    justify-content: left;
    align-items: center;
}
.col-mitad {
    width: 50%;
    height: 100%;
}
.row {
    width: 100%;
    height: auto;
    padding-top: 10px;
    padding-bottom: 10px;
}
.texto {
    font-size: 0.7rem;
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
}
.twocolumns b, .twocolumns span {
    font-size: 0.9rem;
}
.select-users {
    display: flex;
    flex-direction: column;
    justify-content: right;
    align-items: center;
}

</style>
