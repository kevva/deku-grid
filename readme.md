# deku-grid [![Build Status](https://travis-ci.org/kevva/deku-grid.svg?branch=master)](https://travis-ci.org/kevva/deku-grid)

> Grid component for deku


## Install

```
$ npm install deku-grid
```


## Usage

```js
import {Cell, Grid} from 'deku-grid';

const render = () => (
	<Grid gutter>
		<Cell size='1of2' md-size='1of3' lg-size='1of4'>
			<img src='cat.jpg' alt=''/>
		</Cell>
	</Grid>
);

export default {render};
```

## API

### &lt;Grid/&gt;

#### gutter

Type: `boolean`<br>
Default: `false`

Add `Grid--withGutter` class.

#### center

Type: `boolean`<br>
Default: `false`

Add `Grid--alignCenter` class.

#### right

Type: `boolean`<br>
Default: `false`

Add `Grid--alignRight` class.

#### middle

Type: `boolean`<br>
Default: `false`

Add `Grid--alignMiddle` class.

#### bottom

Type: `boolean`<br>
Default: `false`

Add `Grid--alignBottom` class.

#### equalHeight

Type: `boolean`<br>
Default: `false`

Add `Grid--equalHeight` class.

#### fit

Type: `boolean`<br>
Default: `false`

Add `Grid--fit` class.

### &lt;Cell/&gt;

#### size

Type: `string`

Can be any of the sizes available in [`suitcss-utils-size`](https://github.com/suitcss/utils-size). Use the `sm-size`, `md-size` or `lg-size` props to set sizes for different viewports.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
