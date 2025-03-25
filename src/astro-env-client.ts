interface ClientEnv {
    readonly PUBLIC_SCORE_API: string;
    readonly PUBLIC_REPO_API: string;
    readonly PUBLIC_SHOW_BUTTON: boolean;
}

// Aseguramos que las variables de entorno tengan valores por defecto
// en caso de que no estén definidas en el entorno
export const env: ClientEnv = {
    get PUBLIC_SCORE_API(): string {
        return import.meta.env.PUBLIC_SCORE_API || "https://www.random.org/integers/?num=1&min=1&max=5&col=1&base=10&format=plain&rnd=new";
    },
    get PUBLIC_REPO_API(): string {
        return import.meta.env.PUBLIC_REPO_API || "https://magicloops.dev/api/loop/e76f6c5f-6899-4449-b7c4-3965d0cd7bf5/run?action=get+repo+info";
    },
    get PUBLIC_SHOW_BUTTON(): boolean {
        // Convertimos a string y luego comparamos para manejar correctamente los booleanos
        const showButton = import.meta.env.PUBLIC_SHOW_BUTTON;
        return showButton === undefined ? true : String(showButton).toLowerCase() === 'true';
    }
}