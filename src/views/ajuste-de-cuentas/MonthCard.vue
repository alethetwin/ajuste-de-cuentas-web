<script setup lang="ts">
import { components } from '../../api/ajuste-de-cuentas-v1';
import { formatCurrency, getMonthName } from '../../utils';
type MonthPeriod = Omit<components['schemas']['MonthPeriod'], '$schema'>;

defineProps<MonthPeriod>();
//
</script>

<template>
    <div class="card flex justify-between">
        <p>{{ getMonthName(month) }}, {{ year }}</p>
        <p>{{ formatCurrency(closedSettlementAmount) }}</p>
    </div>
</template>
