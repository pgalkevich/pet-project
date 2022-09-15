type TMods = Record<string, boolean | string>;

export const classnames = (cls: string, mods: TMods, additional?: string[]): string => {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([cls, condition]) => Boolean(condition))
            .map(([cls, condition]) => cls)
    ].join(' ');
}