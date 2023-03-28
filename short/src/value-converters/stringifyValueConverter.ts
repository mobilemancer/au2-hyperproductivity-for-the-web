export class StringifyValueConverter {
    toView(input: string | Array<string>) {
        if (!Array.isArray(input)) {
            return input;
        }

        return input.join('\r\n');
    }
}