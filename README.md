# Svelte - Material Design Icons

Using [Material Design Icons](https://materialdesignicons.com/) in your Svelte projects.

```
npm install mdi-svelte --save-dev
```

## Demo

Go to [Demo page](https://alexxnb.github.io/mdi-svelte/demo/dist/index.html).

## Usage

The example below uses the `@mdi/js` package which contains all the MDI icon's path data.

```javascript
import Icon from 'mdi-svelte';
import { mdiCardsSpade } from '@mdi/js';

<Icon path={mdiCardsSpade}
        size={1}
        horizontal
        vertical
        rotate={90}
        color="red"
/>
```

## Props


| Prop        | PropTypes      | Default  | Details |
|-------------|----------------|----------|---------|
| path        | string         | required | SVG path data. Usually from [@mdi/js](https://templarian.github.io/@mdi/js) |
| size        | number, string | `null`   | `{size * 1.5}rem`, `1em`, `48px` |
| flip        | bool, string   | `false ` | `h` - flip horizontal, `v` - vertical, `true` - both |
| rotate      | number         | `0 `     | degrees `-360` to `360` |
| color       | string         | color of the text   | `rgb()` / `rgba()` / `#000` |
| spin        | bool, number   | `false`  | `true` = `2s`, `-2` counterclockwise, `{spin}s` |


## Inspiration

[NPM @MDI Organization](https://npmjs.com/org/mdi)
[@MDI/React module](https://www.npmjs.com/package/@mdi/react)


