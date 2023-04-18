import { render, fireEvent } from '@testing-library/react';
import Card from './Card';
import TEST_IMAGES from './_testCommon.js';

// smoke test
it('renders the Carousel component', function () {
	render(
		<Card
			caption="test image"
			src="img.png"
			currNum="1"
			totalNum="3"
		/>
	);
});

// snapshot test
it('matches the initial snapshot', function () {
	const { container } = render(
		<Card
			caption="test image"
			src="img.png"
			currNum="1"
			totalNum="3"
		/>
	);
	expect(container).toMatchSnapshot();
});
