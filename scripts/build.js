/**
 * Copies public & ultraviolet into the dist directory.
 */

import fs from 'fs-extra';
import { uvPath } from 'ultraviolet';

try {
	await fs.mkdir('dist');
} catch (err) {
	if (err?.code !== 'EEXIST') throw err;
}

await fs.copy(uvPath, 'dist/uv/');
await fs.copy('public', 'dist/');
