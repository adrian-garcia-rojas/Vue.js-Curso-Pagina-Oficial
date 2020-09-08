var app = new Vue({
    el:'#app',
    data:{
        message:'hola mundo, ejemplos de Vue.js desde la documentacion oficial'
    }
})

var app2 = new  Vue({
    el: '#app-2',
    data:{
        message: 'usted cargo esta pagina el ' + new Date().toLocaleString()
    }
})