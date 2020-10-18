/* Mapeado de una matriz a elementos con v-for */
var mapeadoDeUnaMatriz = new Vue({
    el: '#mapeadoDeUnaMatriz',
    data:{
        items:[
            {mensaje:'Foo'},
            {mensaje:'Bar'}
        ]
    }
})

var mapeadoDeUnaMatriz_ex2 = new Vue({
    el: '#example2',
    data:{
        mensajePadre: 'Padre',
        items:[
            {mensaje:'Foo'},
            {mensaje:'bar'}
        ]
    }
})

/** Tambien puede usar of como delimitador en lugar de in, de modo que estes 
 * mas cerca de la sintaxis de JavaScrit para los iteradores
 * 
 *  <div v-for="item of items"></div>
 * 
 */


 /**# v-for ------------------->>> CON UN OBJETO */
 var v_for_object = new Vue({
     el: '#v-for-object',
     data:{
         object: {
             nombre:'John',
             apellido: 'Doe',
             edad: '30'
         }
     }
 })

 // v-for-object-value-key
 var v_for_object_value_key = new Vue({
    el: '#v-for-object-value-key',
    data:{
        object:{
            nombre: 'adri',
            apellido:'Segundo Apellid',
            edad: '31'
        }
    }
 })

 // v-for-object-index-value-key
 var v_for_object_index_value_key = new Vue({
     el: '#v-for-object-index-value-key',
     data: {
         object:{
             nombre: 'adri',
             apellido: 'gar',
             edad: '32'
         }
     }
 })

 /** # key */
 var key = new Vue({
     el: '#key',
     data:{
         items:[
             {id: '0', nombre: 'juan'}
         ]
     }
 })

 
 /** #Mutando un Array */
 var mutandoArray = new Vue({
     el: '#mutandoArray',
     data: {
         items:[
             {mensaje: 'Bar'},
             {mensaje: 'Foo'},
             {mensaje: 'Hola mundo'}
         ]
     }
 })

 /** #Advertencias */
var advertencias = new Vue({
    el: '#advertencias',
    data: {
        items: ['a', 'b', 'c']
    }
})


/**Advertencias con la Deteccion de Cambios en Objetos */
var vmDeteccionDeCambios = new Vue({
    data: {
        a:1
    }
})
//vm.a ahora es reactivo
//pero agregando una variable b de la siguiente manera no es reactivo
vmDeteccionDeCambios.b = 2

/**Vue no permite agregar dinámicamente nuevas propiedades reactivas a nivel de raíz a una instancia ya creada. Sin embargo, es posible agregar propiedades reactivas a un objeto anidado usando el método Vue.set (objeto, clave, valor). Por ejemplo, dado: */
var vmDeteccionDeCambios2 = new Vue({
    data: {
        userProfile:{
            name: 'Anika'
        }
    }
})
//Podría agregar una nueva propiedad de edad al objeto de userProfile anidado con:
Vue.set(vmDeteccionDeCambios2.userProfile, 'edad', 27)
//También puede usar el método de instancia vm. $Set, que es un alias para el Vue.set global:
vmDeteccionDeCambios2.$set(vmDeteccionDeCambios2.userProfile, 'auto', 'si')
//Puedria agregar nuevas propiedades reactivas con:
vmDeteccionDeCambios2.userProfile = Object.assign({}, vmDeteccionDeCambios2.userProfile,{
    direccion: 'conocida puebla',
    musica: 'indie',
    telefono: 8934937498
})

// Mostrando resultados filtrados /ordenados
var mostrarResultadosFiltradosOrdenados = new Vue({
    el: '#mostrarResultadosFiltradosOrdenados',
    data: {
        numeros: [1,2,3,4,5]
    },
    computed:{
        numerosImpares: function(){
            return this.numeros.filter(function(numero){
                return numero % 2 === 0
            })
        }
    }
})

//ejemplo2
var mostrarResultadosFiltradosOrdenadosNoFactibleFor = new Vue({
    el: '#mostrarResultadosFiltradosOrdenadosNoFactibleFor',
    data: {
        numeros: [1,2,3,4,5]
    },
    methods:{
        even: function(numeros){
            return numeros.filter(function(numero){
                return numero % 2 === 0
            })
        }
    }
})

// v-for con un Rango
//directo en html el for
var vforConRango = new Vue({
    el: '#vforConRango',
    data:{

    }
})

// # vforEnUnTemplete
var vforEnUnTemplete = new Vue({
    el: '#vforEnUnTemplete',
    data: {
        items: [
            {msg: 'hola 1'},
            {msg: 'hola 2'},
            {msg: 'hola 3'}
        ]
    }
})


// v-for con  v-if 
/** Tener en cuenta que no se recomienda usar v-if y v-for juntos, 
 * consulte la guia de estilo para mas detalles */

 var vForConvIf = new Vue({
     el: '#vForConvIf',
     data:{
         todos:[1,2,3,4,5,6]
     }
 })

 /**# v-for con un component */
 /**Esta sección asume el conocimiento de Componentes. Siéntase libre de saltearlo y volver más tarde.

Puede usar v-for directamente en un componente personalizado, como cualquier elemento normal:

<my-component v-for="item in items" :key="item.id"></my-component>
En 2.2.0+, cuando se usa v-for con un componente, ahora se requiere una key.

Sin embargo, esto no pasará automáticamente ningún dato al componente, porque los componentes tienen sus propios ámbitos aislados. Para pasar los datos iterados al componente, también debemos usar props:

<my-component
  v-for="(item, index) in items"
  v-bind:item="item"
  v-bind:index="index"
  v-bind:key="item.id"
></my-component>
La razón para no inyectar automáticamente el item en el componente es porque hace que el componente esté estrechamente acoplado a cómo funciona v-for. Ser explícito acerca de dónde provienen sus datos hace que el componente sea reutilizable en otras situaciones. */

 /**Aqui un ejemplo completo de una lista de tareas simples */
Vue.component('todo-item',{
    template: '\
        <li>\
            {{ title }}\
            <button v-on:click="$emit(\'remove\')">Remove</button>\
        </li>\
    ',
    props: ['title']
})

var listaDeTareasSimple = new Vue({
    el: '#listaDeTareasSimple',
    data: {
        newTodoText: '',
        todos: [
            {
                id: 1,
                title: 'Lavar los platos'
            },
            {
                id: 2,
                title: 'Sacar la basura'
            },
            {
                id: 3,
                title: 'Cortar el cesped'
            }
        ],
        nextTodoId: 4
    },
    methods:{
        addNewTodo: function() {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            })
            this.newTodoText= ''   
        }
    }
})


