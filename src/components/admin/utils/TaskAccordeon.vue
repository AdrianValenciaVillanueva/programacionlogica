<template>
  <div class="content-container">
    <a class="titulo" @click="toggleDropDown">
      <div class="info-task" id="info-task">
        <span>{{ task.title }}</span>
        <span>{{ task.deadline }}</span>
      </div>
      <img
        src="../../../assets/drop.png"
        alt="dropdown"
        :class="{ rotated: isRotated }"
      />
    </a>
    <div class="content" :class="{ expanded: isExpanded }">
      <ItemTarea
        :task="task"
      />
    </div>
  </div>
</template>

<script>
import ItemTarea from "./ItemTarea.vue";

export default {
  name: "TitleAccordeon",
  components: {
    ItemTarea
  },
  data() {
    return { 
      isRotated: false,
      isExpanded: false,
    };
  },
  props: {
    task: {
      type: Object,
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
    height: 100%;
}

.titulo {
  display: flex;
  position: left;
  align-items: center;
  text-decoration: none;
  justify-content: space-between;
  cursor: pointer;
  color: black;
  width: 100%;
  height: auto;
  padding: 15px;
  border-radius: 4px;
}

.titulo h1 {
  font-size: 1.8rem;
  text-align: left;
}

.titulo {
  font-size: 0.8rem;
}

.titulo img {
  width: 1rem;
  height: 1rem;
  margin-right: 1.3rem;
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
  width: 100%;
  max-height: 0;
  position: relative;
  transition: max-height 650ms;
}

.content.expanded {
  max-height: 50rem;
  transition: all 0.5s;
  width: 100%;
}
.info-task {
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: left;
  width: 100%;
}
</style>
