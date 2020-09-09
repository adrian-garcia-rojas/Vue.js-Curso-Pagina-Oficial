var vm = new Vue({
    el: '#example',
    data: {
        message: 'hola'
    },
    computed:{
        reversedMessage: function(){
            return this.message.split('').reverse().join('')
        }
    }
})