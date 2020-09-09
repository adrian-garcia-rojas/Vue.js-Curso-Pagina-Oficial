Vue.component('todo-item',{
    props:['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data:{
        groceryList:[
            {id: 0, text: 'Vegetales'},
            {id: 1, text: 'Queso'},
            {id: 2, text: 'Cualquier otra cosa que se supone que los humanos coman'}
        ]
    }
})