//###  Renderizacion Condicional  ###

// # v-if
var vif = new Vue({
    el: '#vif',
    data:{
        ok: true
    }
})

var templeteVif = new Vue({
    el: '#templete-vif',
    data:{
        ok: true
    }
})

// # v-else
var math = new Vue({
    el: '#math',
    data:{

    }
})

// # v-else-if -> apartir de la version 2.10+
var vElseIf = new Vue({
    el: '#vElseIf',
    data:{
        type: 'C'
    }
})


// # Controlando elementos reutilizables con key
var elementosReutilizablesConKey = new Vue({
    el: '#controlandoElementosReutilizablesConKey',
    data: {
        loginType: 'username',
        textIn: ''
    },
    methods:{
        cambia: function(){
            if(this.textIn == 'email'){
                this.loginType = this.textIn
            }
            else{
                this.loginType = this.textIn
            }
        }
    }
})


/**
 * v-show
Otra opción para mostrar un elemento condicionalmente es la directiva v-show. La utlización es basicamente la mismo:

<h1 v-show="ok">Hola!</h1>
La diferencia es que un elemento con v-show siempre se renderizará y permanecerá en el DOM; v-show simplemente alterna la propiedad CSS display del elemento.

Observe que el uso de v-show no es compatible con elementos <template>, ni tampoco funciona con v-else.

v-if vs v-show
v-if es una renderización condicional “real” ya que garantiza que los eventos y componentes secundarios dentro del bloque condicional sean debidamente destruidos y recreados durante la alternancia.

v-if también es lazy: si la condición es falsa en la representación inicial, no se hará nada. El bloque condicional no se procesará hasta que la condición se convierta en true por primera vez.

En comparación, v-show es mucho más simple: el elemento siempre se representa independientemente de la condición inicial, con alternancia basada en CSS.

En general, v-if tiene costos de alternancia más altos, mientras quev-show tiene costos de renderización iniciales más altos. Por lo tanto, prefiera v-show si necesita cambiar algo muy a menudo, y prefierav-if si es poco probable que la condición cambie en el tiempo de ejecución.

v-if con v-for
Usando v-if y v-for juntos no es recomendado. Vea la guía de estilo para mayor información.

Cuando es utilizado junto con v-for, este tiene una prioridad más alta que v-if. Consulte la guía de renderización de listas para obtener más información.
 */