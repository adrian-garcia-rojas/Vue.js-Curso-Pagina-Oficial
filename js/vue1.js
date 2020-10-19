// # Escuchar eventos
var example1 = new Vue({
    el: '#escucharEventos',
    data:{
        counter: 0
    }
})

// # Metodos manejadores de eventos
var example2 = new Vue({
    el: '#MetodosMenejadoresDeEventos',
    data: {
        name: 'Vue.js'
    },
    methods:{
        saludar: function(event){
            //this  - dentro de los metodos aputna a la instancia de vue
            alert('hola ' + this.name + '!')
            //event es el evento DOM nativo
            if(event){
                alert(event.target.tagName)
            }
        }
    }
})

// # Metodos manejadores en linea
var metodosManejadoresEnLinea = new Vue({
    el: '#metodosManejadoresEnLinea',
    methods:{
        di: function(mensaje){
            alert(mensaje)
        },
        //accediendo al evento del DOM original - $event
        Alertar: function(message, event){
            if(event) event.preventDefault()
            alert(message)
        }
    }
})
