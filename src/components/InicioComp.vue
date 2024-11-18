<template>
    <div class="principal">
        <h1>Iniciar Sesión</h1>
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
                <label for="contrasenia">Contraseña:</label>
                <input
                    type="password"
                    id="contrasenia"
                    v-model="contrasenia"
                />
            </div>
            <div class="ContenedorBot">
                <button class="botonCon" @click="enviar">Continuar</button>
            </div>
        </div>
        <div class="redireccion">
            <div class="redireccion-item">
                <p>¿No tienes una cuenta?</p>
                <router-link to="/crear-cuenta">
                    <button>Crear cuenta</button>
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
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name: 'InicioComp',
  data() {
    return {
      nombre: '',
      contrasenia: ''
    };
  },
  methods: {
    async enviar() {
      // Verificar si todos los campos están completos
      if (!this.nombre || !this.contrasenia) {
        Swal.fire({
          icon: 'warning',
          title: 'Campos incompletos',
          text: 'Por favor, completa todos los campos.'
        });
        return;
      }

      try {
        const response = await axios.post('http://127.0.0.1:8000/login/', {
          username: this.nombre,
          password: this.contrasenia
        });
        console.log('Inicio de sesión exitoso:', response.data);
        
        const id = response.data.user_id;
        const responseUser = await axios.get(`http://127.0.0.1:8000/users/${id}`);
        const user = responseUser.data;
        const teamId = user.id_team;
        console.log('Usuario logeado:', user);

        let pagina;
            if (user.is_admin) {
                pagina = `/panel-admin/${id}/crear-tareas/${teamId}`;
            } else {
                pagina = `/panel-usuario/${id}`;
            }
        
        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión exitoso',
          text: 'Redirigiendo...'
        }).then(() => {
          this.$router.push(pagina);
        });

      } catch (error) {
        if (error.response) {
          console.error('Error al iniciar sesión:', error.response.data);
          Swal.fire({
            icon: 'error',
            title: 'Error al iniciar sesión',
            text: 'Contraseña invalida'
          });
        } else {
          console.error('Error al iniciar sesión:', error.message);
          Swal.fire({
            icon: 'error',
            title: 'Error al iniciar sesión',
            text: 'Ocurrió un error, inténtalo de nuevo.'
          });
        }
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
    padding-top: 60px;
    justify-items: center;
}

h1 {
    font-weight: bold;
    font-size: 3rem;
    text-align: center;
    color: #062743;
    padding-bottom: 30px;
}

.rectangulo {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 45px;
    background-color: #113A5D; /* Color original del texto */
    width: 650px;
    height: 350px;
    padding-left: 30px;
    padding-right: 30px;
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.3);
    margin: 0 auto;
}

.textfields {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

.textfields input {
    border-radius: 25px;
    border: 2px solid #F7F4F4; 
    background-color: #F7F4F4; 
    color: #000000; 
    width: 590px;
    height: 60px;
    font-size: 1.5rem;
    outline: none;
    padding-right: 15px;
    padding-left: 15px;
}

.textfields label {
    color: #F7F4F4; 
    font-weight: bold;
    text-align: justify;
    margin-bottom: 5px;
    font-size: 1.5rem;
}

.textfields input:focus {
    border-color: #C4FFDD; /* Mantengo un color contrastante */
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
    background-color: #F7F4F4; /* Fondo claro */
    font-size: 1.5rem;
    font-weight: bold;
    color: #113A5D; /* Texto oscuro */
    height: 60px;
    width: 220px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.botonCon:hover {
    background-color: #C4FFDD; /* Hover contrastante */
    color: #062743;
}

.redireccion {
    padding-top: 20px;
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
    padding: 10px 20px;
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
    margin-top: 10px;
    font-size: 1.1rem;
    text-align: center;
}
</style>