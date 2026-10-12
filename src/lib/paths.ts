const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** Prefixes local absolute URLs so public assets and native form actions work on GitHub Pages. */
export function withBasePath(path: string): string {
  if (!basePath || !path.startsWith('/') || path.startsWith('//')) {
    return path;
  }

  if (path === basePath || path.startsWith(`${basePath}/`)) {
    return path;
  }

  return `${basePath}${path}`;
}
