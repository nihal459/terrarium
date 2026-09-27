// Prefix for sites served from a subpath, such as GitHub Pages (/terrarium).
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const withBase = (path: string) => `${basePath}${path}`;
