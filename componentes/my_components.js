export default{
    data(){
        return{
            lista:[],

            mensaje1:"Taller Vue Básico",
            libro:null, 
            autor:null,
            genero:null,
            paginas:null,
            Eliminar:null,
            mapeo: "",
            /* agregarfinal:null, */
            /* agregarinicio:null */
        }
    },
    methods:{
        enviar(){
            this.lista.push({
                libro:this.libro,
                autor:this.autor,
                genero:this.genero,
                paginas:this.paginas})
                this.libro=null
                this.autor=null
                this.genero=null
                this.paginas=null
        },
        eliminaprimero(){
            this.lista.shift();
        },
        eliminarultimo(){
            this.lista.pop();
        },
        agregarInicio(){
            this.lista.unshift({
                libro:this.libro,
                autor:this.autor,
                genero:this.genero,
                paginas:this.paginas})
                this.libro=null
                this.autor=null
                this.genero=null
                this.paginas=null;
        },
        agregaralfinal(){
            this.lista.push({
                libro:this.libro,
                autor:this.autor,
                genero:this.genero,
                paginas:this.paginas})
                this.libro=null
                this.autor=null
                this.genero=null
                this.paginas=null
        },
        eliminarcualquiera(id){
            this.lista.splice(id,1)
        },
        mapeo(){
            this.mapeo.map((lista)=>(lista))
        } 
    }
}