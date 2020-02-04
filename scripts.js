var panel = new Vue({
    el: '#app',
    data: {
        productos: [],
        total: '',
        name: '',
        price: ''
    },
    methods: {
        agregarProducto: function() {
            this.productos.push({
                nombre: this.name,
                precio: this.price,
                isActive: this.price > 10 ? false : true
            });

        },
        eliminarUltimo: function() {
            this.productos.pop();
        }
    }
});

function calcularPrecio() {

}