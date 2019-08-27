import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import staticSite from 'rollup-plugin-static-site';

const production = !process.env.ROLLUP_WATCH;
const targetDir = production ? 'dist' : '__dev'

export default {
	input: 'src/main.js',
	output: {
		sourcemap: false,
		format: 'iife',
		name: 'app',
		file: targetDir + '/bundle.js'
	},
	plugins: [
		svelte({
			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file — better for performance
			css: css => {
				css.write(targetDir + '/bundle.css',false);
			}
		}),
		staticSite({ 
			title: 'Svelte component for Material Design Icons',
			css: targetDir + '/bundle.css',
			dir: targetDir 
		}),
		resolve({
			browser: true,
			dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
		}),
		commonjs(),
		!production && livereload(targetDir),
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};
