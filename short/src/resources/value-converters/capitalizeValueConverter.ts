export class CapitalizeValueConverter {
    toView(input: string): string {
        return input.charAt(0).toUpperCase() + input.substring(1).replace("_", " ");
    }
}