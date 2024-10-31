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
    height: 100%;
}

.titulo {
  display: flex;
  position: left;
  align-items: center;
  text-decoration: none;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  height: auto;
  padding: 15px 0 15px 0;
  border-radius: 4px;
}

.titulo h1 {
  font-size: 1.8rem;
  text-align: left;
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
  transition: max-height 450ms;
}

.content.expanded {
  max-height: 50rem;
  width: 100%;
}
</style>
