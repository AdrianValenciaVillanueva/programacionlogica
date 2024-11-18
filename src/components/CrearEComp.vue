<template>
    <div class="principal">
        <h1>Crear Equipo</h1>
        <div class="rectangulo">
            <div class="textfields">
                <label for="username">Nombre de administrador:</label>
                <input
                    type="text"
                    id="username"
                    v-model="username"
                />
            </div>
            <div class="textfields">
                <label for="equipo">Nombre del equipo:</label>
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
                <button class="botonCon" @click="enviar">Crear</button>
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
                <p>¿Quieres crear un usuario?</p>
                <router-link to="/crear-cuenta">
                    <button>Crear usuario</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name: 'CrearEquipo',
  data() {
    return {
      username: '',
      admin: true,
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
          icon: 'warning',
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
        const teamId =response.data.id_team;
        let pagina = `panel-admin/${id}/crear-tareas/${teamId}`;
        console.log('Redirigiendo a: ', pagina);

        Swal.fire({
          icon: 'success',
          title: 'Equipo creado',
          text: 'El equipo se ha creado exitosamente.'
        }).then(() => {
          this.$router.push(pagina);
        });
      } catch (error) {
        let errorMessage = 'Error al crear el usuario';
        if (error.response) {
          errorMessage += ': ' + JSON.stringify(error.response.data);
        } else {
          errorMessage += ': ' + error.message;
        }
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: errorMessage
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
    padding-top: 30px;
}

h1 {
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    color: #062743;
    padding-bottom: 30px;
}

.rectangulo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 45px;
    background-color: #113A5D; /* Fondo oscuro */
    width: 600px;
    padding: 30px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
    margin: 0 auto;
}

.textfields {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

.textfields input {
    border-radius: 25px;
    border: 2px solid #113A5D; 
    background-color: #FFFFFF;
    color: #000000; 
    width: 530px;
    height: 60px;
    font-size: 1.5rem;
    outline: none;
    padding: 0 15px;
}

.textfields label {
  font-weight: bold;
    color: #F7F4F4; /* Texto claro */
    margin-bottom: 5px;
    text-align: justify;
    font-size: 1.5rem;
}

.textfields input:focus {
    border-color: #C4FFDD; /* Color de enfoque */
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
    font-weight: bold;
    border: none;
    background-color: #F7F4F4; /* Fondo claro */
    font-size: 1.5rem;
    color: #113A5D; /* Texto oscuro */
    height: 60px;
    width: 150px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.botonCon:hover {
    background-color: #C4FFDD; /* Hover contrastante */
    color: #062743;
}

.redireccion {
    font-size: 1.2rem;
    display: flex;
    width: 590px;
    justify-content: space-between;
    margin: 0 auto;
    padding-top: 20px;
    margin-bottom: 30px;
}

.redireccion-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.redireccion button {
    font-size: 1.1rem;
    color: #FFFFFF;
    padding: 10px 20px;
    background-color: #113A5D; /* Fondo oscuro */
    cursor: pointer;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.redireccion button:hover {
    background-color: #062743;
}

.error-message {
    color: #FF0000;
    font-size: 1.2rem;
    text-align: center;
    margin-top: 20px;
}
</style>
