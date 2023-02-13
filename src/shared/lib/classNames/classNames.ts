type Mods = Record<string, boolean | string>

export function classNames (cls: string, mods: Mods = {}, add: string[] = []): string {
    return [
        cls,
        ...add.filter(Boolean),
        ...Object.entries(mods)
            .filter(([classname, value]) => Boolean(value))
            .map(([classname]) => classname)
    ].join(' ')
}
