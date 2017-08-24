/** @jsx dom */
import dom from 'magic-virtual-element';

const classes = opts => ({
	'Grid-cell': true,
	'Grid-cell--center': Boolean(opts.center),
	...['size', 'sm-size', 'md-size', 'lg-size'].reduce((obj, x) => ({
		...obj,
		[`u-${x}${opts[x]}`]: (/^\d+of\d+$/).test(opts[x]),
		[`u-${x}Fit`]: opts[x] === 'fit',
		[`u-${x}FitAlt`]: opts[x] === 'fit-alt',
		[`u-${x}Fill`]: opts[x] === 'fill',
		[`u-${x}FillAlt`]: opts[x] === 'fill-alt',
		[`u-${x}Full`]: opts[x] === 'full'
	}), {})
});

const render = ({props}) => (
	<div class={[classes(props), props.class]}>
		{props.children}
	</div>
);

export default {render};
