import { ref } from 'vue';

const useFetch = <T>(fetchFunction: () => Promise<T>) => {
    const loading = ref(false);
    const result = ref<T | null>(null);

    const fetchData = async () => {
        loading.value = true;
        result.value = null;
        try {
            result.value = await fetchFunction();
        } finally {
            loading.value = false;
        }
    };
    return { loading, result, fetchData };
};

export default useFetch;
