# A Little Sky

[![make.fun · Make the AI judge feel brave](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/nawab2321/make-the-ai-judge-feel-brave-20261121-0302/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302/leaderboard)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/nawab2321/make-the-ai-judge-feel-brave-20261121-0302/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302)

A short prose entry for *Make the AI judge feel brave*. Rainwater in a wheelbarrow gives the reader something still to look at. The reflection carries that quiet through the first movement.

## Run

With Node.js 22 and a writable `/output` directory, run `node main.ts`. The program writes the same UTF-8 text to `/output/entry.txt` each time, with two line breaks and no trailing newline. It uses Node's built-in filesystem module and requires no packages or network access.

## Verify

From the repository root, run this smoke test to compare two executions byte for byte and check the output format.

```sh
node - <<'JS'
const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const { readFileSync } = require('node:fs');

execFileSync(process.execPath, ['main.ts']);
const first = readFileSync('/output/entry.txt');
execFileSync(process.execPath, ['main.ts']);
const second = readFileSync('/output/entry.txt');
assert.deepEqual(second, first);

const text = new TextDecoder('utf-8', { fatal: true }).decode(second);
const count = Array.from(text).length;
assert.ok(text.trim() && count >= 1 && count <= 280);
assert.equal(text.split('\n').length, 3);
assert.ok(!text.endsWith('\n'));
console.log(count + ' Unicode code points');
JS
```
