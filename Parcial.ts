//Luis David Ixquiac Sac
//1521223
class Farmacia {        //Class Farmacia para poder realizar mi tipo de dato para ingersar a la tabla
    private codigo: string;
    private nombre: string;
    private precio: number;
    private venta: number;

    constructor(codigo: string, nombre: string, precio: number, venta: number) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.venta = venta;
    }

    public getCodigo() {            //Metodos Get Para obtener datos
        return this.codigo;
    }

    public getNombre() {
        return this.nombre;
    }

    public getPrecio() {
        return this.precio;
    }

    public getVenta() {
        return this.venta;
    }
}

class MinHeap {
    public heap: Farmacia[];        //Tipo farmacia
    private n: number;

    constructor(size: number) {
        this.heap = new Array(size + 1);
        this.n = 0;
    }

    public insert(value: Farmacia): void {      //Funcion Insert
        if (this.n == (this.heap.length - 1)) {
            this.resize(2 * this.heap.length);
        }
        this.n++;
        this.heap[this.n] = value;
        this.swap(this.n);
    }

    private resize(newSize: number): void {     
        let newHeap: Farmacia[] = new Array(newSize);
        for (let i = 1; i <= this.n; i++) {
            newHeap[i] = this.heap[i];
        }
        this.heap = newHeap;
    }

    private swap(i: number): void {
        let father: number = Math.floor(i / 2);
        while (i > 1 && this.heap[father].getPrecio() > this.heap[i].getPrecio()) {
            [this.heap[father], this.heap[i]] = [this.heap[i], this.heap[father]];
            i = father;
            father = Math.floor(i / 2);
        }
    }

    public showTasks(): void {
        for (let i = 1; i <= this.n; i++) {
            const task = this.heap[i];
            console.log("Nombre: " + task.getNombre() + " Codigo: " + task.getCodigo() + " Precio: " + task.getPrecio() + " Venta: " + task.getVenta());
        }
    }

    public search(codigo: string): Farmacia | null {
        for (let i = 1; i <= this.n; i++) {
            if (this.heap[i].getCodigo() == codigo) {
                return this.heap[i];
            }
        }
        return null;
    }
}

let producto1: Farmacia = new Farmacia("P001", "Acetaminofen", 50, 60);
let producto2: Farmacia = new Farmacia("P002", "Ibuprofeno", 30, 80);
let producto3: Farmacia = new Farmacia("P003", "Paracetamol", 40, 90);
let producto4: Farmacia = new Farmacia("P004","Cortisol",10,20)
let producto5: Farmacia = new Farmacia("P005","Metronidazol",100,150)

let minHeap: MinHeap = new MinHeap(10);
minHeap.insert(producto1);
minHeap.insert(producto2);
minHeap.insert(producto3);
minHeap.insert(producto4);
minHeap.insert(producto5);

console.log("Productos ingresados:");
minHeap.showTasks();

let buscado = minHeap.search("P020");
if (buscado !== null) {
    console.log("Producto encontrado: " + buscado.getNombre());
} else {
    console.log("El producto no se encuentra ingresado aun >C");
}








