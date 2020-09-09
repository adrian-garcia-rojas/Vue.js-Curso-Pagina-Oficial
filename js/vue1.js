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