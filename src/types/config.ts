/**
 * ThunderClient configuration.
 */
export type Config = {
    url: string;
    username: string | undefined;
    password: string | undefined;
    timeout: number;
    interval: number;
}
