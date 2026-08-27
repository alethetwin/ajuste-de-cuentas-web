<script setup lang="ts">
import { Message } from 'primevue';
import { onMounted } from 'vue';
import AjusteDeCuentasAPI from '../../api/AjusteDeCuentasAPI';
import useFetch from '../../composables/use-fetch';
import LoadingAnimation from '../components/LoadingAnimation.vue';
import MonthCard from './MonthCard.vue';

const {
    result,
    loading,
    fetchData: getMonths
} = useFetch(async () => {
    return await AjusteDeCuentasAPI.GET('/months', {});
});

onMounted(() => {
    getMonths();
});
</script>

<template>
    <div>
        <div class="card">
            <div class="flex justify-between">
                <div class="flex flex-col justify-around">
                    <p class="block text-muted-color font-semibold mb-auto text-xl!">Cortes mensuales</p>
                </div>
                <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                    <i class="pi pi-calendar text-blue-500 text-xl!"></i>
                </div>
            </div>
        </div>
        <div v-if="!result">
            <!--  -->
        </div>
        <div v-else-if="result.error">
            <Message>Algo salió mal {{ result.error.detail }}</Message>
        </div>
        <template v-else>
            <MonthCard v-for="month in result.data" :key="month.id" v-bind="month"> </MonthCard>
        </template>
        <LoadingAnimation v-if="loading" />
    </div>
</template>
