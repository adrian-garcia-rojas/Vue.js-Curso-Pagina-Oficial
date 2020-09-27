var app = new Vue({
    el: '#app',
    data: {
        message: 'hola'
    },
    methods:{
        reversedMessage: function(){
            return this.message.split('').reverse().join('')
        }
    },
    computed:{
        now: function(){
            return Date.now()
        }
    }
})


/** CODIGO PARA DEMO
 * CONSTRUIDO DE FORMA IMPERATIVA
 */

 var vm = new Vue({
     el: '#demo',
     data:{
         firstName:'Foo',
         lastName:'Bar',
         fullName:'Foo Bar'
     },
     watch:{
         firstName: function(val){
             this.fullName = val + ' ' + this.lastName
         },
         lastName: function(val){
             this.fullName = this.firstName + ' ' + val
         }
     }
 })

/** EL CODIGO ANTERIOR ES IMPERATIVO Y REPETITIVO. COMPARA CON UNA VERSION DE PROPIEDAD COMPUTADA
 * 
 * MUCHO MEJOR NO?
 */
var vm = new Vue({
    el: '#demo',
    data:{
        firstName:'Foo',
        lastName:'Bar'
    },
    computed:{
        fullName: function(){
            return this.firstName + ' ' + this.lastName
        }
    }
})


/**Setter Computado */
var vmsc = new Vue({
    el: '#setterComputado',
    data:{
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed:{
        fullName2:{
            get: function(){
                return this.firstName + ' ' + this.lastName
            },
            set: function(newValue){
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    }
})

/**Watchers */
var watchExampleVM = new Vue({
    el: '#watch-example',
    data:{
        question: '',
        answer: 'No puedo darte una respuesta hasta que hagas una pregunta!'
    },
    watch:{
        question: function(newQuestion, oldQuestion){
            this.answer = 'Esperando que deje de escribri...'
            this.debouncedGetAnswer()
        }
    },
    created: function(){
        // _.debounce es una función proporcionada por lodash para limitar cuan
        // a menudo se puede ejecutar una operación particularmente costosa.
        // En este caso, queremos limitar la frecuencia con la que accedemos a
        // yesno.wtf/api, esperando hasta que el usuario haya terminado
        // de escribir antes de realizar la solicitud ajax.
        // Para aprender más sobre la función _.debounce (y su primo
        // _.throttle), visite: https://lodash.com/docs#debounce
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods:{
        getAnswer: function(){
            if(this.question.indexOf('?') === -1){
                this.answer = 'Las preguntas suelen contener un signo de interrogacion'
                return
            }
            this.answer = 'Pensando...'
            var vm = this
            axios.get('https://yesno.wtf/api')
                .then(function(response){
                    vm.answer = _.capitalize(response.data.answer)
                })
                .catch(function(error){
                    vm.answer = '¡Error! No se pudo alcanzar la API. ' + error
                })
        }
    }
})