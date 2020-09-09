/* Interpolaciones */
var texto = new Vue({
    el: '#texto',
    data: {
        mensaje: 'interpolacion de texto'
    }
})

/* html puro */
var htmlPuro = new Vue({
    el:'#htmlPuro',
    data:{
        rawHtml:' -> con html puro y mustachess {{}} / ver direciva v-html'
    }
})

/* Atributos */
var atributos = new Vue({
    el:'#atributos',
    data:{
        dynamicId: 12,
        isButtonDisabled: true
    }
})

/* Usando expresiones JavaScript */
var expresionesJS = new Vue({
    el: '#expresionesJS',
    data: {
        number: 1,
        ok: false,
        message: 'hola mundo'
    }
})


/*DIRECTIVAS */
var directivas = new Vue({
    el: '#directivas',
    data: {
        seen: true
    }
})


/*Argumentos */
var argumentos = new Vue({
    el: '#argumentos',
    data: {
        url: 'https://www.google.com.mx',
        mensaje: 'saludo'
    },
    methods: {
        doSomething: function(){
            alert(this.mensaje)
        }
    }
})


/*Modificadores */
var modificadores = new Vue({
    el: '#modificadores',
    data: {
        mensaje: 'mensaje desde modificadores'
    },
    methods: {
        onSubmit: function(){
            console.log(this.mensaje)
        }
    }
})


/** Revisar los modos abreviados de 
 * v-bind & v-on
 *
 * full v-bind 
 *      <a v-bind:href="url">...</a>
 * abreviado
 *      <a :href="url">...</a>
 * 
 * 
 * full v-on
 * 
 *      <a v-on:click="doSomething">...</a>
 * 
 * abreviado
 *      <a @click="doSomething">...</a>
 * 
 */