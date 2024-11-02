<template>
    <div class="select-container" @click="abrirDropdown">
        <select name="estudiantes" id="estudiantes" v-show="false"> 
            <option v-for="(option, index) in options" :key="index" :value="option">{{ option }}</option>
        </select>
        <span>{{ msg }}</span>
        <ul v-show="dropdownAbierto" class="dropdown-menu"> 
            <li v-for="(option, index) in options" :key="index">{{ option }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'SelectUser',
    props: {
        options: [],
        msg: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            dropdownAbierto: false,
        }
    },
    methods: {
        abrirDropdown() {
            this.dropdownAbierto = !this.dropdownAbierto;
        }
    }
};
</script>

<style scoped>
.select-container {
    background-color: #f9f9f9;
    border-radius: 3px;
    box-shadow: 0 4px 4px 0px rgba(0, 0, 0, 0.1);
    width: auto;
    padding: 0.5em 2.5em 0.6em 0.3em;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
}

.select-container::after {
    content: '';
    background: url('../../../assets/drop.png') no-repeat center center;
    background-size: contain;
    position: absolute;
    height: 1rem;
    width: 1rem;
    top: 50%;
    right: 0.5em;
    transform: translateY(-50%);
}

.select-container span {
    font-size: 0.8rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: clip;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #f9f9f9;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    list-style: none;
    padding: 0;
    margin: 0;
    border-radius: 3px;
    z-index: 10;
}

.dropdown-menu li {
    padding: 0.5em;
    cursor: pointer;
}

.dropdown-menu li:hover {
    background-color: #dde1e6;
}
</style>
