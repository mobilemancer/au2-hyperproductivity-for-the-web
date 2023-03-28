export class KeysValueConverter {
    toView(obj): string[] {
        const keys = Reflect.ownKeys(obj) as string[];
        return keys.filter(x => x !== '$observers');
    }
}