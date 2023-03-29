type TMods = Record<string, boolean | string>;

export const classnames = (cls: string, mods: TMods = {}, additional: string[] = []): string => {
    return [
        cls,
        ...Object.entries(mods)
            .filter(([_, condition]) => Boolean(condition))
            .map(([className]) => className),
        ...additional.filter(Boolean),
    ].join(' ');
};
