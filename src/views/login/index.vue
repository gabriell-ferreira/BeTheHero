<template>
  <div id="login">
    <main>
      <img src='../../assets/logo.png' alt="Logo Be The Hero">

      <p>Faça seu logon</p>

      <div class="input-area">
        <input-component type='text' placeholder='Sua ID'/>

        <router-link to="/home">
          <button-component value='Entrar'/>  
        </router-link>
      </div>

      <router-link to='/register' class="register-link">
        <img src="../../assets/icons/enter.svg" alt="Não tenho cadastro">
        <span>Não tenho cadastro</span>
      </router-link>
    </main>

    <aside>
      <img src="../../assets/people.png" alt="">
    </aside>
  </div>
</template>

<script>
import inputComponent from '../../components/input.vue'
import buttonComponent from '../../components/button.vue'
export default {
  data(){
    return {
      
    }
  },
  components: {
    inputComponent,
    buttonComponent
  },
  methods: {
    
  }
}
</script>

<style scoped>
  #login {
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  #login aside {
    margin-left: 9.375rem;
  }

  #login aside img {
    width: 100%
  }

  #login main {
    max-width: 21.875rem;
  }

  #login main p {
    font-weight: 500;
    font-size: 36px;

    margin: 6.25rem 0 2rem
  }

  #login main .input-area :nth-child(1){
    margin-bottom: 1rem;
  }

  #login main .input-area {
    margin-bottom: 2.5rem;
  }

  #login main .register-link {
    display: inline-flex;
    align-items: center;

    text-decoration: none;
    color: var(--sub-title);

    font-weight: 700;
    font-size: 1.125rem;
  }

  #login main .register-link:hover {
    text-decoration: underline;
  }

  #login main .register-link img {
    margin-right: 1.25rem;
  }

  @media (max-width: 1024px){
    #login {
      padding: 1rem;
    }
  }

  @media (max-width: 900px){
    #login aside {
      display: none;
    }
    #login main {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>