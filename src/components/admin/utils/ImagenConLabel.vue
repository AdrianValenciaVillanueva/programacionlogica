<template>
    <div class="texto-imagen" id="texto-imagen">
        <img :src="img" alt="imagen" class="imagen">
        <p class="texto">{{ texto }}</p>
    </div>
</template>

<script>
export default {
    props: {
        img: {
            type: String,
            required: true,
        },
        texto:{
            type: String,
            required: true,
        },
        customClass: {
            type: String,
            default: ''
        }
    },
    methods: {
    },
}
</script>

<style scoped>
.texto-imagen {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.imagen {
    width: 8vw;
    height: 7vh;
}
.texto {
    font-size: 1em;
    font-family: 'Roboto', 'Source Sans Pro', Arial, Helvetica, sans-serif;
    margin-left: 1.5vw;
}
</style>