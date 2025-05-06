
<template>
  <v-container>
    <v-card class="pa-4 mb-4">
      <v-card-title>📅 Check-in Semanal</v-card-title>
      <v-text-field v-model="peso" label="Peso Atual (kg)" type="number" />
      <v-select v-model="aderencia" :items="['● Excelente', '○ Boa', '□ Baixa']" label="Aderência" />
      <v-textarea v-model="sentimento" label="Como você se sente?" />
      <v-btn @click="salvarCheckin" color="primary">Salvar Check-in</v-btn>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const peso = ref('');
const aderencia = ref('');
const sentimento = ref('');

function salvarCheckin() {
  const checkin = { peso: peso.value, aderencia: aderencia.value, sentimento: sentimento.value };
  let historico = JSON.parse(localStorage.getItem('checkins') || '[]');
  historico.push({ ...checkin, data: new Date().toISOString() });
  localStorage.setItem('checkins', JSON.stringify(historico));
  alert('Check-in salvo!');
}
</script>
