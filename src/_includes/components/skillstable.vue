<template>
  <div>
    <p v-html="hi"></p>
  </div>
</template>

<!-- <template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="header in headers" :key="header">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td v-for="header in headers" :key="header">{{ item[header] }}</td>
        </tr>
      </tbody>
    </table>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const items = ref([]);
const error = ref(null);
const headers = ref([]);

onMounted(async () => {
  try {
    const response = await fetch("../../_data/skills.json");
    const data = await response.json();
    items.value = data;
    console.log(data);

    // Assuming all objects in the array have the same keys
    if (data.length > 0) {
      headers.value = Object.keys(data[0]);
    }
  } catch (err) {
    error.value = err.message;
  }
});
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
}
</style> -->
