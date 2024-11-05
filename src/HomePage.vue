<template>
  <div class="page-wrapper">
    <nav class="navbar">
      <div class="logo">WeUs</div>
      <ul class="nav-links">
        <li><button @click="goToCreateAccount" class="login-button">Crear Usuario</button></li>
        <li><router-link to="crear-equipo"><button class="login-button">Crear Equipo</button></router-link></li>
      </ul>
    </nav>
    
    <header class="hero-section" id="home">
      <h1>Bienvenido a WeUs</h1>
      <p>Optimiza la colaboración y administración de tareas de manera sencilla.</p>
      <button @click="goToLogin" class="cta-button">Iniciar Sesión</button>
    </header>
    
    <section class="features-section" id="features">
      <div class="features-grid">
        <div class="feature-box">
          <h3>TRABAJO EN EQUIPO</h3>
          <p>Es una plataforma orientada al trabajo en equipo.</p>
        </div>
        <div class="feature-box">
          <h3>FÁCIL DE MANEJAR</h3>
          <p>La asignación de tareas es fácil y rápida.</p>
        </div>
        <div class="feature-box">
          <h3>IMPRIME TUS TAREAS</h3>
          <p>Imprime tus tareas pendientes cuando lo necesites.</p>
        </div>
      </div>
    </section>
    
    <footer class="footer">
      <p>&copy; 2024 WeUs. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    goToLogin() {
      this.$router.push('/iniciar-sesion');
    },
    goToCreateAccount() {
      this.$router.push('/crear-cuenta');
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  margin: 0;
  background-color: #f4f4f4; /* Fondo consistente en toda la página */
}

.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Asegura que ocupe toda la altura del viewport */
  background-color: #f4f4f4; /* Color de fondo del contenido */
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  background-color: #062743;
  color: #fff;
}

.logo {
  font-size: 1.5em;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links li {
  display: inline;
}

.nav-links a, .login-button {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  padding: 8px 15px;
  transition: background-color 0.3s;
}

.login-button {
  background-color: #062743;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #003d82;
}

.hero-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
  background: linear-gradient(135deg, #f4f4f4, #f4f4f4);
  text-align: center;
}

.hero-section h1 {
  font-size: 3em;
  margin-bottom: 20px;
  font-weight: bold;
  color: #062743;
}

.hero-section p {
  font-size: 1.2em;
  color: #555;
  margin-bottom: 30px;
}

.cta-button {
  padding: 15px 30px;
  font-size: 1.1em;
  color: #fff;
  background-color: #062743;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #062743;
}

.features-section {
  padding: 30px 20px;
  text-align: center;
  background-color: #f4f4f4;
}

.features-grid {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: -20px;
}

.feature-box {
  flex: 1;
  min-width: 250px;
  padding: 20px;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: center;
}

.feature-box h3 {
  font-size: 1.5em;
  color: #062743;
  margin-bottom: 10px;
}

.feature-box p {
  font-size: 1em;
  color: #666;
}

.feature-box:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 123, 255, 0.4);
}

.footer {
  padding: 20px;
  background-color: #062743;
  color: #fff;
  text-align: center;
  margin-top: auto; /* Empuja el footer hacia abajo */
}



</style>