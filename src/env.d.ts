declare module 'astro:env/client' {
    export const env: {
        readonly PUBLIC_SCORE_API: string;
        readonly PUBLIC_REPO_API: string;
        readonly PUBLIC_SHOW_BUTTON: boolean;
    }
}