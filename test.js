import assertElement from 'assert-element';
import componentMock from 'component-mock';
import test from 'ava';
import {Cell, Grid} from './lib';

test('grid', t => {
	const mock = componentMock(Grid);
	const el = mock.render({props: {
		center: true,
		gutter: true
	}});

	assertElement.isNode(el, 'div');
	assertElement.hasClass(el, 'Grid');
	assertElement.hasClass(el, 'Grid--withGutter');
	assertElement.hasClass(el, 'Grid--alignCenter');

	t.end();
});

test('cell', t => {
	const mock = componentMock(Cell);
	const el = mock.render({props: {
		size: '1of4'
	}});

	assertElement.isNode(el, 'div');
	assertElement.hasClass(el, 'Grid-cell');
	assertElement.hasClass(el, 'u-size1of4');

	t.end();
});
