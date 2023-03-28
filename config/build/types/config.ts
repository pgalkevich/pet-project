export type TMode = 'development' | 'production';

export interface IBuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface IBuildOptions {
    mode: TMode;
    paths: IBuildPaths;
    isDev: boolean;
    port: number;
}

export interface IBuildEnv {
    mode: TMode;
    port: number;
}