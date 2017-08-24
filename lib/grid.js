/** @jsx dom */
import dom from 'magic-virtual-element';

const classes = opts => ({
	Grid: true,
	'Grid--withGutter': Boolean(opts.gutter),
	'Grid--alignCenter': Boolean(opts.center),
	'Grid--alignRight': Boolean(opts.right),
	'Grid--alignMiddle': Boolean(opts.middle),
	'Grid--alignBottom': Boolean(opts.bottom),
	'Grid--equalHeight': Boolean(opts.equalHeight),
	'Grid--fit': Boolean(opts.fit)
});

const render = ({props}) => (
	<div class={[classes(props), props.class]}>
		{props.children}
	</div>
);

export default {render};
