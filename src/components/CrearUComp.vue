<template>
    <div class="principal">
        <h1>Crear Usuario</h1>
        <div class="rectangulo">
            <div class="textfields">
                <label for="username">Nombre de usuario:</label>
                <input
                    type="text"
                    id="username"
                    v-model="username"
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
    </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: 'CrearUsuario',
  data() {
    return {
      username: '',
      admin: false,
      equipo: '',
      contrasenia: '',
      confirmar: ''
    };
  },
  methods: {
    async enviar() {
      // Verificar si las contraseñas coinciden
      if (this.contrasenia !== this.confirmar) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Las contraseñas no coinciden. Por favor, verifica e intenta de nuevo.'
        });
        return;
      }

      // Verificar si todos los campos están completos
      if (!this.username || !this.equipo || !this.contrasenia || !this.confirmar) {
        Swal.fire({
          icon: 'error',
          title: 'Campos incompletos',
          text: 'Por favor, completa todos los campos.'
        });
        return;
      }

      try {
        const response = await axios.post('http://127.0.0.1:8000/users/', {
          username: this.username,
          password: this.contrasenia,
          is_admin: this.admin,
          id_team: this.equipo
        });
        console.log('Usuario creado:', response.data);
        
        const id = response.data.id;
        let pagina = `panel-usuario/${id}`;
        console.log('Redirigiendo a: ', pagina);

        // Mostrar mensaje de éxito y redirigir
        Swal.fire({
          icon: 'success',
          title: 'Usuario creado',
          text: 'El usuario se ha creado exitosamente.',
        }).then(() => {
          this.$router.push(pagina);
        });
      } catch (error) {
        console.error('Error al crear el usuario:', error.response ? error.response.data : error.message);
        
        Swal.fire({
          icon: 'error',
          title: 'Error al crear usuario',
          text: error.response ? JSON.stringify(error.response.data) : error.message
        });
      }
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
    margin: 0 auto;
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
    margin: 0 auto;
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
