// ? Aqui são definidos os tipos das entidades do banco e seus respectivos DTOs

// * ---------- Tipo ----------
export type Instrument = {
	id: number;
	name: string;
};

// * ---------- DTOs ----------
export interface CreateInstrumentDTO {
	name: string;
}

export interface UpdateInstrumentDTO {
	name?: string;
}
