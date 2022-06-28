<template>
  <form action="#">
    <fieldset>
      <div class="form-group">
        <input
          type="email"
          id="email"
          required
          aria-required="true"
          placeholder="Email"
        />
      </div>
    </fieldset>
    <fieldset>
      <div class="form-group">
        <input
          type="password"
          id="password"
          required
          aria-required="true"
          placeholder="Password"
        />
      </div>
    </fieldset>
    <fieldset>
      <div class="form-group">
        <button type="submit">Login</button>
      </div>
    </fieldset>
  </form>
</template>

<style scoped>
form {
  background: #414141;
  padding: 10em;
  border-radius: 1em;
  color: #ffffff;
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
  color: #ffffff;
}

input + label {
  position: absolute;
  transition: 0.25s ease;
  -moz-transition: 0.25s ease;
  -webkit-transition: 0.25s ease;
  -o-transition: 0.25s ease;
  -ms-transition: 0.25s ease;
  left: 0;
  top: 25px;
  font-size: 24px;
  font-weight: bold;
  color: #888;
}
input:focus + label {
  top: -7px;
  font-size: 14px;
  font-weight: 500;
}
input:valid + label {
  top: -7px;
  font-size: 14px;
  font-weight: 500;
}

.form-group {
  position: relative;
}

fieldset {
  border: none;
  padding: 0px;
  margin: 0px;
}
</style>
