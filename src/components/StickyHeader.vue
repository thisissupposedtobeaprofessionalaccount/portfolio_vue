<script setup>
import { useNavigationStore } from '@/stores/NavigationStore'

const navigation = useNavigationStore()
</script>
<template>
  <div class="header-content">
    <div class="name">H<strong>ugo</strong>.M</div>
    <div class="navigation">
      <div
        class="nav-elt"
        @click="navigation.gotoPage('about')"
        :class="{ selected: navigation.page === 'about' }"
      >
        <a href="#about">Who am I ?</a>
      </div>
      <div
        class="nav-elt"
        @click="navigation.gotoPage('skills')"
        :class="{ selected: navigation.page === 'skills' }"
      >
        <a href="#skills">My skills</a>
      </div>
      <div
        class="nav-elt"
        @click="navigation.gotoPage('work')"
        :class="{ selected: navigation.page === 'work' }"
      >
        <a href="#work">Stuff I did</a>
      </div>
      <div
        class="nav-elt"
        @click="navigation.gotoPage('contacts')"
        :class="{ selected: navigation.page === 'contact' }"
      >
        <a href="#contact">Let's talk</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.name {
  font-family: 'Clash Display Variable';
  font-variation-settings: 'wght' 500;
  font-size: 32px;
}
strong {
  font-variation-settings: 'wght' 400;
}

.selected {
  transition: background-color 0.2s ease;
  background-color: var(--selectedBackgroundColor);
  color: var(--selectedColor);
  border-radius: 100px;
}
.header-content {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  text-align: center;
  font-size: 23px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.nav-elt {
  padding: 10px 40px;
  border-radius: 100px;
}
.nav-elt:focus {
  outline: none;
  border: none;
}
a {
  font-style: normal;
  text-decoration: none;
  color: inherit;
}
</style>
