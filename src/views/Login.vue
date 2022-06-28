<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
const router = useRouter();
const email = ref();
const password = ref();
const login = (e) => {
  router.push({ name: 'schedule' });
};
</script>

<template>
  <form @submit.prevent="login">
    <h1>User Login</h1>
    <fieldset>
      <div class="form-group">
        <input
          v-model="email"
          type="email"
          id="email"
          required
          aria-required="true"
        />
        <label for="email">Email</label>
      </div>
    </fieldset>
    <fieldset>
      <div class="form-group">
        <input
          v-model="password"
          type="password"
          id="password"
          required
          aria-required="true"
        />
        <label for="password">Password</label>
      </div>
    </fieldset>
    <button type="submit">Login</button>
  </form>
</template>

<style scoped>
form {
  background: #414141;
  padding: 2em 5em 5em 5em;
  border-radius: 1em;
}

form button {
  margin-top: 1.5em;
  width: 100%;
  padding: 0.75em;
}

input,
select,
textarea {
  outline: none;
  appearance: unset !important;
  -moz-appearance: unset !important;
  -webkit-appearance: unset !important;
  -o-appearance: unset !important;
  -ms-appearance: unset !important;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  appearance: none !important;
  -moz-appearance: none !important;
  -webkit-appearance: none !important;
  -o-appearance: none !important;
  -ms-appearance: none !important;
  margin: 0;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  box-shadow: none !important;
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  -o-box-shadow: none !important;
  -ms-box-shadow: none !important;
}

input[type='checkbox'] {
  appearance: checkbox !important;
  -moz-appearance: checkbox !important;
  -webkit-appearance: checkbox !important;
  -o-appearance: checkbox !important;
  -ms-appearance: checkbox !important;
}

input:-webkit-autofill {
  box-shadow: 0 0 0 30px transparent inset;
  -moz-box-shadow: 0 0 0 30px transparent inset;
  -webkit-box-shadow: 0 0 0 30px transparent inset;
  -o-box-shadow: 0 0 0 30px transparent inset;
  -ms-box-shadow: 0 0 0 30px transparent inset;
  background-color: transparent !important;
}

input {
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #bfbfbf;
  box-sizing: border-box;
  font-weight: bold;
  font-size: 24px;
  transition: 0.3s ease;
  -moz-transition: 0.3s ease;
  -webkit-transition: 0.3s ease;
  -o-transition: 0.3s ease;
  -ms-transition: 0.3s ease;
  padding-top: 30px;
  padding-bottom: 5px;
  -webkit-appearance: none;
  background: transparent;
  /* color: #414141; */
}

fieldset {
  border: none;
  padding: 0px;
  margin: 0px;
}

input + label {
  position: absolute;
  transition: 0.25s ease;
  -moz-transition: 0.25s ease;
  -webkit-transition: 0.25s ease;
  -o-transition: 0.25s ease;
  -ms-transition: 0.25s ease;
  left: 0px;
  top: 25px;
  font-size: 24px;
  font-weight: bold;
  color: #414141;
}
input:focus + label {
  top: 5px;
  font-size: 14px;
  font-weight: 500;
}
input:valid + label {
  top: 5px;
  font-size: 14px;
  font-weight: 500;
}

.form-group {
  position: relative;
}
</style>
