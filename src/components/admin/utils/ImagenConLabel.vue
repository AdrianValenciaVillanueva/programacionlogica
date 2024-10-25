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
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
.texto-imagen {
    display: flex;
    justify-content: space-between;
    align-items: center;
    float: left;
    gap: 0.8em;
}
.imagen {
    width: fit-content;
    height: 2.7rem;
}
.texto {
    font-size: 1rem;
    font-family: 'Roboto', 'Source Sans Pro', Arial, Helvetica, sans-serif;
    /* margin-left: 1.5vw; */
}
</style>