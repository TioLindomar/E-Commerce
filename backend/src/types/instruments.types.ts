// ? Aqui são definidos os tipos das entidades do banco e seus respectivos DTOs

// * ---------- Tipos ----------
export interface Instrument {
	id: number;
	name: string;
}

// * ---------- DTOs ----------
export interface CreateInstrumentDTO {
	name: string;
}

export interface UpdateInstrumentDTO {
	name?: string;
}
