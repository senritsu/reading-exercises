export const parseGraphemeString = (graphemeString: string) => [...graphemeString.matchAll(/<([^<>]{2,4})>|(\w)/g)].map(m => m[1] ?? m[2])
