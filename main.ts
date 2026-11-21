const { mkdirSync, writeFileSync } = require('node:fs');

const entry = [
  'The rain has stopped. A little sky rocks in the wheelbarrow.',
  'She waits for it to settle, then lifts the handles.',
  'At the first rut, the sky creases and smooths.',
].join('\n');

try {
  mkdirSync('/output', { recursive: true });
  writeFileSync('/output/entry.txt', entry, 'utf8');
} catch (error) {
  console.error('Could not write /output/entry.txt:', error);
  process.exitCode = 1;
}
