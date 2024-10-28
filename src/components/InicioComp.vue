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
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    </div>
</template>

  
<script>
  export default {
    name: 'InicioComp',
    data() {
      return {
        nombre: '',        
        contrasenia: ''    
      };
    },
    methods: {
        enviar() {
    if (this.nombre && this.contrasenia) {
      // Aquí incluirías la llamada a la API o verificación
      // Suponiendo que es incorrecto:
      if (!this.checkCredentials(this.nombre, this.contrasenia)) {
        this.errorMessage = 'Nombre de usuario o contraseña incorrectos.';
      } else {
        this.errorMessage = ''; // Limpiar error si es correcto
      }
    } else {
      this.errorMessage = 'Por favor, completa todos los campos.';
    }
  },
  checkCredentials(nombre, contrasenia) {
    // Simular una validación, solo por ejemplo
    return nombre === 'usuario' && contrasenia === 'contraseña123';
  },
}
  }
</script>
  
<style scoped>
* {
    font-family: Verdana, Geneva, Tahoma, sans-serif;;
}

.principal{
    justify-items: center;
  }
h1 {
    font-size: 3rem; 
    text-align: center; 
    color: #062743;
}
.rectangulo {
    display: flex;                /* Habilita el uso de flexbox */
    flex-direction: column;      /* Apila los elementos verticalmente */
    justify-content: center;      /* Centra el contenido verticalmente */
    align-items: center;          /* Centra el contenido horizontalmente */
    border-radius: 45px;
    background-color: #F7F4F4;
    width: 650px;
    height: 400px;
    padding-left: 30px;          
    padding-right: 30px;    
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.3); /* Sombra ligera */
}
.textfields {
    display: flex;            
    flex-direction: column;      
    margin-bottom: 20px; /* Espacio entre cada grupo de textfields */  
}
.textfields input{
    border-radius: 25px;
    border: 2px solid;
    border-color: #113A5D;
    width: 590px;
    height: 60px;
    font-size: 1.5rem;  
    outline: none;
    padding-right: 15px;
    padding-left: 15px;
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

.ContenedorBot{
    display: flex;
    justify-content: center; 
    margin-top: 10px; 
}
.botonCon{
    text-align: center;
    border:none;
    background-color: #113A5D;
    font-size: 1.5rem;
    color: #FFFFFF;
    height:70px;
    width: 250px;
    border-radius: 10px;
    cursor: pointer; 
    transition: background-color 0.3s ease; 
}

.botonCon:hover{
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
    margin-top: 10px;
    font-size: 1.1rem;
    text-align: center;
}


</style>