//###  Enlace de estilos en linea  ###

// # sintaxis de objeto
var sintaxisDeObjecto = new Vue({
    el: '#sintaxisDeObjecto',
    data:{
        activeColor: 'red',
        fontSize: 12
    }
})

var sintaxisDeObjetoMasObjectoDeEstilos = new Vue({
    el: '#sintaxisDeObjetoMasObjectoDeEstilos',
    data:{
        styleObject:{
            color: 'purple',
            fontSize: '20px'
        }
    }
})

// # Sintaxis de arreglo
var sintaxisDeArreglo = new Vue({
    el: '#sintaxisDeArreglo',
    data:{
        baseStyle: {            
            fontSize: '16px',
            textTransform: 'uppercase'            
        },
        overridingStyles: {
            color: 'blue',
            fontStyle: 'italic'
        }
    }
})