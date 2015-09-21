/** @jsx dom */
import dom from 'magic-virtual-element';

export function render({props}) {
	const {bottom, center, children, gutter, middle, right} = props;
	const classes = {
		Grid: true,
		'Grid--withGutter': Boolean(gutter),
		'Grid--alignCenter': Boolean(center),
		'Grid--alignRight': Boolean(right),
		'Grid--alignMiddle': Boolean(middle),
		'Grid--alignBottom': Boolean(bottom)
	};

	return (
		<div class={[classes, props.class]}>
			{children}
		</div>
	);
}
