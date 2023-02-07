type Mods = Record<string, boolean | string>

export function classNames( cls: string, mods: Mods, add: string[]): string {
    return [
        cls,
        ...add,
        ...Object.entries(mods)
            .filter(([classname, value]) => !!value)
            .map(([classname, value]) => classname)
    ].join(' ')
}