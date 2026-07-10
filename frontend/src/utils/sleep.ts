// * Utilitário para simular uma espera

export function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}