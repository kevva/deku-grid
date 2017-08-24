/** @jsx dom */
import assertElement from 'assert-element';
import componentMock from 'component-mock';
import dom from 'magic-virtual-element';
import test from 'ava';
import {Cell} from '../lib';

const mock = componentMock(Cell);
const sizes = ['size', 'sm-size', 'md-size', 'lg-size'];

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

test('has Grid-cell class', classMacro, [], 'Grid-cell');
test('has class prop', classMacro, ['class', 'Foo'], `Foo`);
test('has center prop', classMacro, ['center', true], `Grid-cell--center`);

for (const x of sizes) {
	test(`${x} - 1of2`, classMacro, [x, '1of2'], `u-${x}1of2`);
	test(`${x} - fit`, classMacro, [x, 'fit'], `u-${x}Fit`);
	test(`${x} - fit-alt`, classMacro, [x, 'fit-alt'], `u-${x}FitAlt`);
	test(`${x} - fill`, classMacro, [x, 'fill'], `u-${x}Fill`);
	test(`${x} - fill-alt`, classMacro, [x, 'fill-alt'], `u-${x}FillAlt`);
	test(`${x} - full`, classMacro, [x, 'full'], `u-${x}Full`);
}
