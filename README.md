Named exports not working when running `npm run build`

```bash
npm run build
```

These import statements:
```javascript
  import { waitUntil }from 'async-wait-until/dist/index.esm.js';
  import { waitUntil } from 'async-wait-until'
```

Cause this error on `npm run build`:

```
file:///Users/ben/dev/esm-issue-repro/.svelte-kit/output/server/app.js:4
import {waitUntil} from "async-wait-until/dist/index.esm.js";
        ^^^^^^^^^
SyntaxError: Named export 'waitUntil' not found. The requested module 'async-wait-until/dist/index.esm.js' is a CommonJS module, which may not support all module.exports as named exports.
CommonJS modules can always be imported via the default export, for example using:

import pkg from 'async-wait-until/dist/index.esm.js';
const {waitUntil} = pkg;

    at ModuleJob._instantiate (internal/modules/esm/module_job.js:97:21)
    at async ModuleJob.run (internal/modules/esm/module_job.js:142:20)
    at async Loader.import (internal/modules/esm/loader.js:182:24)
    at async prerender (file:///Users/ben/dev/esm-issue-repro/node_modules/@sveltejs/kit/dist/chunks/index5.js:79:14)
    at async Object.prerender (file:///Users/ben/dev/esm-issue-repro/node_modules/@sveltejs/kit/dist/chunks/index5.js:296:5)
    at async adapt (file:///Users/ben/dev/esm-issue-repro/node_modules/@sveltejs/adapter-netlify/index.js:33:4)
    at async adapt (file:///Users/ben/dev/esm-issue-repro/node_modules/@sveltejs/kit/dist/chunks/index5.js:322:2)
    at async file:///Users/ben/dev/esm-issue-repro/node_modules/@sveltejs/kit/dist/cli.js:616:5
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! esm-issue-repro@0.0.1 build: `svelte-kit build`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the esm-issue-repro@0.0.1 build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/ben/.npm/_logs/2021-05-19T22_37_22_686Z-debug.log
```

