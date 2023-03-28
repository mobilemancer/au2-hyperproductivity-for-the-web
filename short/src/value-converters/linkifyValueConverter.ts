export class LinkifyValueConverter {
    toView(input: string) {
        if (input.startsWith("https://")) {
            return "<a load='apa'></a>";
        }
    }
}