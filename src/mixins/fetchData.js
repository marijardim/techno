export default {
  data () {
    return {
      dados: null,
      isLoading: true
    }
  },
  methods: {
    fetchData (url) {
      this.isLoading = true
      this.dados = null
      fetch(`http://localhost:3000${url}`)
        .then(r => r.json())
        .then(r => {
          this.dados = r
          this.isLoading = false
        })
    }
  }
}
