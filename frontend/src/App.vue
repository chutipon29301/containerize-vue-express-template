<template>
  <div id="app">
    <ul class="flex mt-4 mx-2">
      <li class="mr-3">
        <router-link to="/" :class="getClass('Home')">Home</router-link>
      </li>
      <li class="mr-3">
        <router-link to="/sensor" :class="getClass('Sensor')"
          >Sensor</router-link
        >
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  private isActive(name: string) {
    return this.$route.name === name;
  }

  private getClass(name: string) {
    return this.isActive(name)
      ? "inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white"
      : "inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3";
  }
}
</script>
