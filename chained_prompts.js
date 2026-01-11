function toKebabCase(str) {
    return str
        // Handle camelCase: insert hyphen before uppercase letters
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        // Handle uppercase sequences (acronyms): insert hyphen before last capital
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
        // Replace spaces and underscores with hyphens
        .replace(/[\s_]+/g, '-')
        // Remove non-alphanumeric characters (except hyphens)
        .replace(/[^a-z0-9-]/gi, '')
        // Convert to lowercase
        .toLowerCase()
        // Trim leading and trailing hyphens
        .replace(/^-+|-+$/g, '');
}