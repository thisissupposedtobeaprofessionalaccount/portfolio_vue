<script setup>
import { ref } from 'vue'
import themeColor from '@/assets/themeColors.json'

const name = ref('')
const email = ref('')
const message = ref('')
</script>
<template>
  <form action="">
    <input type="text" v-model="name" class="name" placeholder="your name" />
    <input type="text" v-model="email" class="email" placeholder="your mail adresse" />
    <textarea v-model="message" class="message" placeholder="your message here"></textarea>
    <button type="submit">send !</button>
  </form>
</template>
<style scope>
form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
input,
textarea {
  text-indent: 10px;
  font-family: 'Plus Jakarta Sans';
  color: v-bind('themeColor.lighterDark');
  font-size: 23px;
  resize: none;
  background-color: transparent;
  border: none;
  border-bottom: solid 2px v-bind('themeColor.accent');
}

input:focus,
textarea:focus {
  background-color: v-bind('themeColor.white');

  outline: 0;
}

::placeholder,
:-moz-placeholder,
::-webkit-input-placeholder {
  font-size: 23px;
  color: v-bind('themeColor.accentLight');
  opacity: 1;
}
.name {
  width: 32%;
  height: 50px;
}
.email {
  width: 49%;
  height: 50px;
}
.message {
  margin-top: 70px;
  width: 100%;
  height: 217px;
}

button {
  font-family: 'Plus Jakarta Sans';
  background-color: v-bind('themeColor.accent');
  height: 70px;
  border: none;
  box-shadow: none;
  width: 32%;
  font-size: 32px;
  margin-top: 100px;
  color: v-bind('themeColor.backgroundLight');
  margin-left: auto;
  box-shadow: 6px 6px 0 0 v-bind('themeColor.accentLight');
  cursor: pointer;
  transition: all ease 0.2s;
}

button:hover {
  transform: translate(-2px, -2px);
  box-shadow: 8px 8px 0 0 v-bind('themeColor.accentLight');
  transition: all ease 0.2s;
}
</style>
