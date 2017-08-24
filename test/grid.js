/** @jsx dom */
import assertElement from 'assert-element';
import componentMock from 'component-mock';
import dom from 'magic-virtual-element';
import test from 'ava';
import {Grid} from '../lib';

const mock = componentMock(Grid);

const classMacro = (t, [key, val], expected) => {
	const m = mock.render({props: {[key]: val}});
	assertElement.hasClass(m, expected);
};

test('renders children when passed in', () => {
	const children = <div class='Foo'/>;
	const m = mock.render({props: {children}});

	assertElement.hasChildren(m, x => {
		assertElement.hasClass(x, 'Foo');
	});
});

test('has class prop', classMacro, ['class', 'Foo'], `Foo`);
test('has gutter prop', classMacro, ['gutter', true], `Grid--withGutter`);
test('has center prop', classMacro, ['center', true], `Grid--alignCenter`);
test('has right prop', classMacro, ['right', true], `Grid--alignRight`);
test('has middle prop', classMacro, ['middle', true], `Grid--alignMiddle`);
test('has bottom prop', classMacro, ['bottom', true], `Grid--alignBottom`);
test('has equalHeight prop', classMacro, ['equalHeight', true], `Grid--equalHeight`);
test('has fit prop', classMacro, ['fit', true], `Grid--fit`);
