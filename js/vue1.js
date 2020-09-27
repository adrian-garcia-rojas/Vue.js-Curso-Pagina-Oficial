//Sintaxis de objeto
var sintaxis = new Vue({
    el: '#sintaxis',
    data:{
        isActive: true,
        hasError: false
    }
})

var sintaxis2 = new Vue({
    el: '#sintaxis2',
    data:{
        classObject:{
            active: false,
            'text-danger': false
        }
    }
})

var sintaxis3Pcomputada = new Vue({
    el: '#sintaxis3Pcomputada',
    data:{
        isActive: true,
        error: null
    },
    computed:{
        classObject: function(){
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    }
})

//Sintaxis de Array

var sintaxisDeArray = new Vue({
    el: '#sintaxisDeArray',
    data:{
        activeClass: 'active',
        errorClass: 'text-danger'
    }
})

var sintaxisDeArrayTernario = new Vue({
    el: '#sintaxisDeArrayTernario',
    data:{
        isActive: true,
        activeClass: 'active',
        errorClass: 'text-danger'
    }
})

var sintaxisDeArrayObject = new Vue({
    el: '#sintaxisDeArrayObject',
    data:{
        isActive: true,
        activeClass: 'active',
        errorClass: 'text-dark' //error class siempre se activara en este ejemplo no quiere decir no podemos manipular su aparicion
    }
})

// Con Componentes

Vue.component('my-component', {
    template: '<p class="foo bar">Hi, esto es un componente</p>'
})

var conComponent = new Vue({
    el: '#conComponent'
})

Vue.component('my-component2',{
    template: '<p class="foo bar">Hi, esto es un componente2</p>'
})

var conComponent2 = new Vue({
    el: '#conComponent2',
    data:{
        isActive: false
    }
})