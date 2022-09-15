import { fileURLToPath } from 'url';

export const publicPath = fileURLToPath(new URL('../dist/', import.meta.url));
