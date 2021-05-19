import preprocess from 'svelte-preprocess';
import netlify from '@sveltejs/adapter-netlify'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
    adapter: netlify(),

    files: {
      assets: 'static',
      hooks: 'src/hooks',
      lib: 'src/lib',
      routes: 'src/routes',
      serviceWorker: 'src/service-worker',
      template: 'src/app.html'
    },

    router: true,
    ssr: true
	}
};

export default config;
