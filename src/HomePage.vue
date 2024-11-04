<template>
    <div class="page-wrapper">
      <div class="content-container">
        <header class="header">
          <h1>Bienvenido a la Página Principal</h1>
          <p>Explora nuestras características y servicios.</p>
        </header>
        <section class="features">
          <div class="feature">
            <h2>TRABAJO EN EQUIPO!!!!!</h2>
            <p>ES UNA PLATAFORMA ORIENTADA EL TRABAJO EN EQUIPO</p>
          </div>
          <div class="feature">
            <h2>FACIL DE MANEJAR</h2>
            <p>LA ASIGNACION DE TAREAS BUSCA TENER UNA MANERA FACIL Y RAPIDA DE ASIGNACION</p>
          </div>
          <div class="feature">
            <h2>PUEDES IMPRIMIR TUS TAREAS!</h2>
            <p>EN CASO DE NECESITARLO PUEDES IMPRIMIR TUS TAREAS PENDIENTES</p>
          </div>
        </section>
        <button @click="goToLogin" class="login-button">Iniciar Sesión</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    methods: {
      goToLogin() {
        this.$router.push('/iniciar-sesion');
      }
    }
  };
  </script>
  
  <style scoped>
  * {
    padding: 0;
    margin: 0;
  }
  .page-wrapper {
    display: flex;
    height: 100vh;
    background-color: #f9f9f9;
    justify-content: center;
    align-items: center;
    font-family: Helvetica, sans-serif;
  }
  .content-container {
    display: block;
    margin: 0 auto;
    width: 85%;
    text-align: center;
  }
  .header {
    margin-bottom: 50px;
  }
  .header h1 {
    font-size: 2.5em;
    color: #333;
  }
  .header p {
    font-size: 1.2em;
    color: #666;
  }
  .features {
    display: flex;
    justify-content: space-around;
  }
  .feature {
    width: 30%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    transition: transform 0.3s ease; /* Añade una transición suave */
  }
  .feature:hover {
    transform: scale(1.07); /* Efecto de crecimiento */
  }
  .feature h2 {
    font-size: 1.5em;
    color: #333;
    margin-bottom: 10px;
  }
  .feature p {
    font-size: 1em;
    color: #666;
  }
  .login-button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 1em;
    color: #fff;
    background-color: #333;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .login-button:hover {
    background-color: #555;
  }
  </style>