<template>
  <div class="container flex justify-center">
    <div class="w-full max-w-sm mt-16">
      <div class="flex items-center border-b border-b-2 border-blue-500 py-2">
        <input
          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Add value to SensorValue table"
          v-model="value"
        />
        <button
          class="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
          @click="addValue"
        >Send</button>
        <button
          class="flex-shrink-0 border-transparent border-4 text-blue-500 hover:text-blue-800 text-sm py-1 px-2 rounded"
          type="button"
          @click="clear"
        >Cancel</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Sensor extends Vue {
  private value = "";
  private data = [];
  async mounted() {
    await this.fetchData();
  }

  private async fetchData() {
    const { data } = await this.axios.get("/sensor");
    this.data = data;
    console.log(data);
  }

  private async addValue() {
    if (!isNaN(+this.value)) {
      await this.axios.post("/sensor", {
        value: +this.value
      });
      await this.fetchData();
    }
    this.clear();
  }

  private async clear() {
    this.value = "";
  }
}
</script>
