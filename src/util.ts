
const base = baseUrlNoEndingSlash();

export function prefixInternalPath(pathOrUrl: string): string;
export function prefixInternalPath(pathOrUrl: URL): string;
export function prefixInternalPath(pathOrUrl: null): null;
export function prefixInternalPath(pathOrUrl: undefined): undefined;
export function prefixInternalPath(pathOrUrl: string | URL | null | undefined): string | null | undefined {

    if (null === pathOrUrl || undefined === pathOrUrl) {
        return pathOrUrl;
    }
    if (typeof(pathOrUrl) !== "string") {
        pathOrUrl = pathOrUrl.toString();
    }
    if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
        return pathOrUrl; //url
    }
    if (pathOrUrl === '#') {
        return base;
    }
    if (!pathOrUrl.startsWith('/')) {
        throw new Error('offsetInternalLink(pathOrUrl: string) should start with /, but got: ' + pathOrUrl)
    }
    return base + pathOrUrl;
}

function baseUrlNoEndingSlash(): string {
    const result = import.meta.env.BASE_URL;
    if (result.endsWith('/')) {
        return result.substring(0, result.length - 2)
    } else {
        return result;
    }
}