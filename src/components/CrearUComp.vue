<template>
    <div class="principal">
        <h1>Crear Usuario</h1>
        <div class="rectangulo">
            <div class="textfields">
                <label for="nombre">Nombre de usuario:</label>
                <input
                    type="text"
                    id="nombre"
                    v-model="nombre"
                />
            </div>
            <div class="textfields">
                <label for="equipo">ID del equipo:</label>
                <input
                    type="text"
                    id="equipo"
                    v-model="equipo"
                />
            </div>
            <div class="textfields">
                <label for="contrasenia">Contraseña:</label>
                <input
                    type="password"
                    id="contrasenia"
                    v-model="contrasenia"
                />
            </div>
            <div class="textfields">
                <label for="confirmar">Confirmar contraseña:</label>
                <input
                    type="password"
                    id="confirmar"
                    v-model="confirmar"
                />
            </div>
            <div class="ContenedorBot">
            <button class="botonCon" @click="enviar">Crear usuario</button>
            </div>
        </div>
        <div class="redireccion">
            <div class="redireccion-item">
                <p>¿Ya tienes una cuenta?</p>
                <router-link to="iniciar-sesion">
                    <button>Iniciar sesión</button>
                </router-link>
            </div>
            <div class="redireccion-item">
                <p>¿Quieres crear un equipo?</p>
                <router-link to="/crear-equipo">
                    <button>Crear equipo</button>
                </router-link>
            </div>
        </div>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    </div>
</template>

<script>
export default {
  name: 'CrearUsuario',
  data() {
    return {
      nombre: '',
      equipo: '',
      contrasenia: '',
      confirmar: '',
      errorMessage: '' // Para mostrar mensajes de error
    };
  },
  methods: {
    enviar() {
      // Validación simple
      if (!this.nombre || !this.equipo || !this.contrasenia || !this.confirmar) {
        this.errorMessage = 'Por favor, completa todos los campos.';
        return;
      }
      
      if (this.contrasenia !== this.confirmar) {
        this.errorMessage = 'Las contraseñas no coinciden.';
        return;
      }

      // Aquí puedes manejar la lógica para crear el usuario, como llamar a una API
      console.log('Creando usuario con:', this.nombre, this.equipo, this.contrasenia);

      // Reiniciar el formulario y el mensaje de error si todo es correcto
      this.errorMessage = '';
      this.nombre = '';
      this.equipo = '';
      this.contrasenia = '';
      this.confirmar = '';

      // Redirigir a otra página o mostrar un mensaje de éxito
    }
  }
};
</script>

<style scoped>
* {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.principal {
    justify-items: center;
}

h1 {
    font-size: 3rem; 
    text-align: center; 
    color: #062743;
}

.rectangulo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 45px;
    background-color: #F7F4F4;
    width: 650px;
    height: auto; /* Cambiado para ajustarse al contenido */
    padding: 30px; /* Añadido un padding uniforme */
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3); /* Sombra más fuerte */
}

.textfields {
    display: flex;            
    flex-direction: column;      
    margin-bottom: 20px; /* Espacio entre cada grupo de textfields */  
}

.textfields input {
    border-radius: 25px;
    border: 2px solid #113A5D;
    width: 590px;
    height: 60px;
    font-size: 1.5rem;  
    outline: none;
    padding: 0 15px; /* Espacio interno */
}

.textfields label {
    color: #113A5D;
    text-align: justify;
    margin-bottom: 5px; 
    font-size: 2rem;
}

.textfields input:focus {
    border-color: #C4FFDD; 
    box-shadow: 0 0 5px #C4FFDD;
    outline: none;
}

.ContenedorBot {
    display: flex;
    justify-content: center; 
    margin-top: 10px; 
}

.botonCon {
    text-align: center;
    border: none;
    background-color: #113A5D;
    font-size: 1.5rem;
    color: #FFFFFF;
    height: 70px;
    width: 250px;
    border-radius: 10px;
    cursor: pointer; 
    transition: background-color 0.3s ease; 
}

.botonCon:hover {
    background-color: #062743;
}

.redireccion {
    font-size: 1.2rem;
    display: flex;
    width: 590px;
    justify-content: space-between;
    margin-top: 0px; /* Espacio arriba de los botones */
}

.redireccion-item {
    display: flex;
    flex-direction: column; 
    align-items: center;
}

.redireccion button {
    font-size: 1.1rem;
    color: #FFFFFF;
    margin-top: -10px;
    padding: 15px 30px;
    background-color: #113A5D;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease; 
}

.redireccion button:hover {
    background-color: #062743;
}

.error-message {
    color: red;
    font-size: 1.2rem;
    text-align: center;
    margin-top: 20px;
}
</style>
