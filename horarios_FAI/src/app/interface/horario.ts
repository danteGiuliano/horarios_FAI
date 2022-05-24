export interface Horarios {
    aula:         null | string;
    dia:          Dia;
    modulo:       string;
    horainicio:   string;
    horafin:      string;
    estado:       Estado;
    cuatrimestre: number;
    Materium:     Materium;
}

export interface Materium {
    nombre:   string;
    Carreras: Carrera[];
}

export interface Carrera {
    nombre: string;
}

export enum Dia {
    Jueves = "Jueves",
    Lunes = "Lunes",
    Martes = "Martes",
    Miercoles = "Miercoles",
    Viernes = "Viernes",
}

export enum Estado {
    Cancelado = "cancelado",
    Normal = "normal",
}