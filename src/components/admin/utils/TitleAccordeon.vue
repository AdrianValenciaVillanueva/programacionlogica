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

    <div v-if="tasks.length > 0">
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
      tasks: [] ,
      isRotated: false,
      isExpanded: false,
    };
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
  border-radius: 4px;
}
.titulo:hover {
  user-select: none;
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

.titulo:hover {
  background-color: #f2f2f2;
}

.content {
  overflow: hidden;
  max-height: 0;
  width: 100%;
  height: auto;
  position: relative;
  transition: max-height 450ms;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
.content a {
    width: 100%;
}

.content.expanded {
  max-height: 20rem;
}
</style>
