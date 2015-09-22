import componentMock from 'component-mock';
import test from 'ava';
import {Cell, Grid} from './lib';

test('grid', t => {
	const mock = componentMock(Grid);
	const el = mock.render({props: {
		center: true,
		gutter: true
	}});

	t.is(el.type, 'div');
	t.is(el.attributes.class, 'Grid Grid--withGutter Grid--alignCenter');
	t.end();
});

test('cell', t => {
	const mock = componentMock(Cell);
	const el = mock.render({props: {
		size: '1of4'
	}});

	t.is(el.type, 'div');
	t.is(el.attributes.class, 'Grid-cell u-size1of4');
	t.end();
});
