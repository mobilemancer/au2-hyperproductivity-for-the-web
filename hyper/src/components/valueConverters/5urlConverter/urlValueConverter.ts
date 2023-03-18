export class UrlValueConverter {
    toView(url: string): string {
        const resource = url.replace('https://swapi.dev/api/', '');
        console.log(resource);
        return resource;
    }
}