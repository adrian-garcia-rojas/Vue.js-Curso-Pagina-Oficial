//ver como e valor puedo o no se alterado en documentacion
var data = {a:3}

var vm = new Vue({
    el: '#app-8',
    data: {
        newTodoText: '',
        visitCount: 0,
        hideCompleteTodos: false,
        todos: [],
        error: null
    }
})

// la excepcion a este ejemplo de arriba cuando una variable no este entrando
//al sistema reactivo de vue es, el uso de Object.freeze(), lo que evitara que
//se modifiquen las propiedades existentes, tambien significara que el sistema de 
//reactividad no podra rasterar cambios

var obj = {
    foo: 'bar'
}

Object.freeze(obj)

new Vue({
    el: '#app',
    data: obj
})


/* Ademas de estas propiedades de datos, las instancias de vue exponen una
serie de metodos y propiedades de instancias utiles. estos tiene el prefijo $
para poder defirenciarlos de las propiedades definidas por el usuario ej. */

var data2 = {a:1}
var vm2 = new Vue({
  el: '#example',
  data: data2
})

vm2.$data === data2 // => true
vm2.$el === document.getElementById('example') // => true

// $watch es un método de instancia
vm2.$watch('a', function (newValue, oldValue) {
  // Esta función será ejecutada cuando `vm.a` cambie
})