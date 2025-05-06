
<template>
  <v-card class="pa-4">
    <v-card-title>📊 Progresso Semanal</v-card-title>
    <line-chart :chart-data="chartData" :chart-options="chartOptions" />
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LineChart } from 'vue-chart-3';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const chartData = ref({
  labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
  datasets: [
    {
      label: 'Peso (kg)',
      data: [48, 48.5, 49, 49.5],
      backgroundColor: '#3f51b5',
      borderColor: '#3f51b5',
      fill: false,
    },
  ],
});

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>
