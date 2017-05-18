<template>
  <div>
    <router-view></router-view>
    <div id="app"></div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data: function () {
      return {
        section: 'Head',
        version: '0.10.0',
        callingAPI: false,
        serverURI: 'http://0.0.0.0:8080', 
        caller: this.$http
      }
    },
    methods: {
      callAPI: function (method, url, data, callback) {
        // console.log('callAPI ...')
        this.callingAPI = true
        url = url || this.serverURI // if no url is passed then inheret local server URI
        return this.caller({
          url: url,
          method: method,
          data: data,
          dataType: 'json',
          success: callback
        })
      },
      logout: function () {
        this.$store.commit('setUser', null)
        this.$store.commit('setToken', null)
        if (window.localStorage) {
          window.localStorage.setItem('user', null)
          window.localStorage.setItem('token', null)
        }
        this.$router.push('/login')
      }
    }
  }
</script>
