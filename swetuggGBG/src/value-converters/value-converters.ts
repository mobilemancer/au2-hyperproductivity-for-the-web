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
        return keys.filter(x => x !== '$observers' && x !== 'created' && x !== 'edited');
    }
}

@valueConverter('stringify')
export class StringifyValueConverter {
    toView(input: string) {
        if (typeof (input) === 'number') {
            return input;
        }

        if (input.startsWith("https://")) {
            return input;
        }

        const utcTimeRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{6}Z$/;
        if (utcTimeRegex.test(input)) {
            return new Date(input).toLocaleString();
        }

        return input;
    }
}