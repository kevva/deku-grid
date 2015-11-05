/** @jsx dom */
import dom from 'magic-virtual-element';

export function render({props}) {
	const {bottom, center, children, equalHeight, fit, gutter, middle, right} = props;
	const classes = {
		Grid: true,
		'Grid--withGutter': Boolean(gutter),
		'Grid--alignCenter': Boolean(center),
		'Grid--alignRight': Boolean(right),
		'Grid--alignMiddle': Boolean(middle),
		'Grid--alignBottom': Boolean(bottom),
		'Grid--equalHeight': Boolean(equalHeight),
		'Grid--fit': Boolean(fit)
	};

	return (
		<div class={[classes, props.class]}>
			{children}
		</div>
	);
}
