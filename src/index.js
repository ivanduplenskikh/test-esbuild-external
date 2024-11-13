const tl = require('azure-pipelines-task-lib/task');
const assert = require('node:assert');
const path = require('node:path');

try {
    tl.rmRF(path.resolve(__dirname, 'test-folder'));

    console.log(`Number of entries ${tl.ls(__dirname).length} at ${__dirname}`);
    assert.strictEqual(tl.ls(__dirname).length, 1);

    tl.cd(__dirname);
    tl.mkdirP('test-folder');

    console.log(`Number of entries ${tl.ls(__dirname).length} at ${__dirname}`);
    assert.strictEqual(tl.ls(__dirname).length, 2);
    console.log('All assertions passed');
    process.exit(0);
} catch (error) {
    console.error(error);
    process.exit(1);
}