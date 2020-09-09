/* Hooks del ciclo de vida de la instancia 
created,
mounted,
updated,
destroyed
*/

var vm = new Vue({
    data: {
        a:1
    },
    created: function(){
        console.log('a es: ' + this.a)
    }
})