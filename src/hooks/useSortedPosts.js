import {computed, onMounted, ref} from 'vue';

export default function useSortedPosts(posts) {
    const selectedSort = ref('');
    const sortedPosts = computed(() => {
        if (!selectedSort.value) return posts.value;

        return [...posts.value].sort((post1, post2) => {
            const field = selectedSort.value;
            const val1 = post1[field];
            const val2 = post2[field];

            if (typeof val1 === 'number' && typeof val2 === 'number') {
                return val1 - val2;
            }

            if (typeof val1 === 'string' && typeof val2 === 'string') {
                return val1.localeCompare(val2);
            }

        return 0; // fallback
      });
    });

    return {
        selectedSort,
        sortedPosts,
    }
}