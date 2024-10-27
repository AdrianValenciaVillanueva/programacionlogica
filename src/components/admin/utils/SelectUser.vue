
<template>
    <div class="select-container">
        <span>{{ msg }}</span>
    </div>
</template>

<script>
export default {
    name: 'SelectUser',
    data() {
        return {
            msg: 'usuarios asignados',
        }
    },
};
</script>


<style scoped>
.select-container {
    background-color: #f9f9f9;
    border-radius: 3px;
    box-shadow: 0 4px 4px 0px rgb(0 0 0 0);
    width: auto;
    height: 0.5rem;
    position: relative;
    padding: 0.5em 2.5em 0.6em 0.3em;
    border: 2px solid black;
    display: flex;
    align-items: center;
}
.select-container::after{
    content: '';
    background: url('../../../assets/drop.png') no-repeat center center;
    background-size: contain;
    position: absolute;
    height: 1rem;
    width: 1rem;
    top: 50%;
    right: 0.5em;
    transform: translateY(-50%)

}
.select-container span {
    font-size: 0.8rem;
}
</style>