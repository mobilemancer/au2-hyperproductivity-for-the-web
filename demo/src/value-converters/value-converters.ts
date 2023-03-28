import { valueConverter } from "aurelia";

@valueConverter('capitalize')
export class CapitalizeValueConverter {
    toView(input: string): string {
        return input.charAt(0).toUpperCase() + input.substring(1).replace("_", " ");
    }
}

@valueConverter('keys')
export class KeysValueConverter {
    toView(obj): string[] {
        const keys = Reflect.ownKeys(obj) as string[];
        return keys.filter(x => x !== '$observers');
    }
}

@valueConverter('linkify')
export class LinkifyValueConverter {
    toView(input: string) {
        if (input.startsWith("https://")) {
            return "<a load='apa'></a>";
        }
    }
}

@valueConverter('stringify')
export class StringifyValueConverter {
    toView(input: string | Array<string>) {
        if (!Array.isArray(input)) {
            return input;
        }

        return input.join('\r\n');
    }
}