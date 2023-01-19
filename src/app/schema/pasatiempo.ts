export default interface Pasatiempo{
    id_pasatiempo:number;
    descripcion:string;
    nombre_logo:string;
    categoria:Categoria
}
export enum Categoria{
    "Deportes","Instrumento","Otros"
}