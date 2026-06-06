<template>
  <div v-if="totalPages > 1">
    <button 
      :disabled="currentPage === 1" 
      @click="changePage(currentPage - 1)"
    >
      Poprzednia
    </button>

    <button 
      v-for="page in totalPages" 
      :key="page"
      :style="page === currentPage ? 'font-weight: bold; border-color: black;' : ''"
      @click="changePage(page)"
    >
      {{ page }}
    </button>

    <button 
      :disabled="currentPage === totalPages" 
      @click="changePage(currentPage + 1)"
    >
      Następna
    </button>
  </div>
</template>

<script>
export default {
  name: 'AppPagination',
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    totalItems: {
      type: Number,
      default: 0
    },
    limit: {
      type: Number,
      default: 10
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.limit) || 1
    }
  },
  methods: {
    changePage(page) {
      if (page < 1 || page > this.totalPages) return

      // Wstrzykujemy nową stronę do URL, nie niszcząc filtrów wyszukiwania
      this.$router.push({
        query: {
          ...this.$route.query,
          _page: page
        }
      }).catch(err => {
        if (err.name !== 'NavigationDuplicated') console.error(err)
      })
    }
  }
}
</script>