<template>
  <div class="content-container">
    <a class="titulo" @click="toggleDropDown">
      <h1>Tareas publicadas</h1>
      <img
        src="../../../assets/drop.png"
        alt="dropdown"
        :class="{ rotated: isRotated }"
      />
    </a>

    <div v-if="tasks.length > 0" class="shadow">
      <div v-for="task in tasks" :key="task.id" class="content" :class="{ expanded: isExpanded }">
          <TaskAccordeon :task="task"/>
      </div>
    </div>

    <div v-else class="content" :class="{expanded: isExpanded}">
      <h3 style="padding: 15px; float: left;">No hay tareas</h3>
    </div>
  </div>
</template>

<script>
import TaskAccordeon from "./TaskAccordeon.vue";

export default {
  name: 'TitleAccordeon',
  components: {
    TaskAccordeon
  },
  data() {
    return {
      isRotated: false,
      isExpanded: false,
    };
  },
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },
  methods: {
    toggleDropDown() {
      this.isRotated = !this.isRotated;
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>

<style scoped>
.content-container {
  width: 100%;
}

.titulo {
  display: flex;
  position: relative;
  color: black;
  align-items: center;
  text-decoration: none;
  justify-content: space-between;
  cursor: pointer;
  padding: 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 11px;
}
.titulo:hover {
  user-select: none;
  background-color: #dde1e6;
}

.titulo h1 {
  font-size: 1.8rem;
  text-align: left;
}

.titulo img {
  width: 1.8rem;
  height: 2.7rem;
  transform: rotate(90deg);
  transition: transform 0.3s ease;
}

.titulo img.rotated {
  transform: rotate(0deg);
}

.content {
  overflow: hidden;
  max-height: 0;
  width: 100%;
  height: auto;
  position: relative;
  transition: max-height 650ms;
}
.content a {
    width: 100%;
}

.content.expanded {
  max-height: 20rem;
}
.shadow {
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  margin-bottom: 3em;
  border-radius: 10px;
}
</style>
