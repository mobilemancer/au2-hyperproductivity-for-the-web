export class KeysValueConverter {
    toView(obj): string[] {
        return Reflect.ownKeys(obj) as string[];
    }
}