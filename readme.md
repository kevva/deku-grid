# deku-grid

> Grid component for deku


## Install

```
$ npm install --save deku-grid
```


## Usage

```js
import {Cell, Grid} from 'deku-grid';

export function render() {
	return (
		<Grid gutter>
			<Cell size='1of2' md-size='1of3' lg-size='1of4'>
				<img src='cat.jpg' alt=''/>
			</Cell>
		</Grid>
	);
}
```


## License

MIT © [Kevin Mårtensson](http://github.com/kevva)
