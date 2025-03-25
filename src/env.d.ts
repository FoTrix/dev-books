declare module 'astro:env/server' {
    export const env: {
        readonly PUBLIC_SCORE_API: string;
        readonly PUBLIC_SHOW_BUTTON: boolean;
    }
}