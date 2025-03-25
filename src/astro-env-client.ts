interface ClientEnv {
    readonly PUBLIC_SCORE_API: string;
    readonly PUBLIC_REPO_API: string;
    readonly PUBLIC_SHOW_BUTTON: boolean;
}

export const env: ClientEnv = {
    get PUBLIC_SCORE_API(): string {
        return import.meta.env.PUBLIC_SCORE_API;
    },
    get PUBLIC_REPO_API(): string {
        return import.meta.env.PUBLIC_REPO_API;
    },
    get PUBLIC_SHOW_BUTTON(): boolean {
        return import.meta.env.PUBLIC_SHOW_BUTTON;
    }
}