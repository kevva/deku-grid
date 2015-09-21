/** @jsx dom */
import dom from 'magic-virtual-element';

export function render({props}) {
	const {center, children} = props;

	function getClasses() {
		const classes = {
			'Grid-cell': true,
			'Grid-cell--center': Boolean(center)
		};

		['size', 'sm-size', 'md-size', 'lg-size'].forEach(el => {
			classes[`u-${el}${props[el]}`] = (/^\d+of\d+$/).test(props[el]);
			classes[`u-${el}Fit`] = props[el] === 'fit';
			classes[`u-${el}FitAlt`] = props[el] === 'fit-alt';
			classes[`u-${el}Fill`] = props[el] === 'fill';
			classes[`u-${el}FillAlt`] = props[el] === 'fill-alt';
			classes[`u-${el}Full`] = props[el] === 'full';
		});

		return classes;
	}

	return (
		<div class={[getClasses(), props.class]}>
			{children}
		</div>
	);
}
