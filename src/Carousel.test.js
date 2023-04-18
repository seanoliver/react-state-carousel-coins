import { render, fireEvent } from '@testing-library/react';
import Carousel from './Carousel';
import TEST_IMAGES from './_testCommon.js';

it('works when you click on the right arrow', function () {
	const { container } = render(
		<Carousel
			photos={TEST_IMAGES}
			title="images for testing"
		/>
	);

	// expect the first image to show, but not the second
	expect(
		container.querySelector('img[alt="testing image 1"]')
	).toBeInTheDocument();
	expect(
		container.querySelector('img[alt="testing image 2"]')
	).not.toBeInTheDocument();

	// move forward in the carousel
	const rightArrow = container.querySelector('.bi-arrow-right-circle');
	fireEvent.click(rightArrow);

	// expect the second image to show, but not the first
	expect(
		container.querySelector('img[alt="testing image 1"]')
	).not.toBeInTheDocument();
	expect(
		container.querySelector('img[alt="testing image 2"]')
	).toBeInTheDocument();
});

it('works when you click on the left arrow', function () {
	const { container } = render(
		<Carousel
			photos={TEST_IMAGES}
			title="images for testing"
		/>
	);

	// move forward in the carousel
	const rightArrow = container.querySelector('.bi-arrow-right-circle');
	fireEvent.click(rightArrow);

	// expect the first image to show, but not the second
	expect(
		container.querySelector('img[alt="testing image 2"]')
	).toBeInTheDocument();
	expect(
		container.querySelector('img[alt="testing image 1"]')
	).not.toBeInTheDocument();

	// move forward in the carousel
	const leftArrow = container.querySelector('.bi-arrow-left-circle');
	fireEvent.click(leftArrow);

	// expect the second image to show, but not the first
	expect(
		container.querySelector('img[alt="testing image 2"]')
	).not.toBeInTheDocument();
	expect(
		container.querySelector('img[alt="testing image 1"]')
	).toBeInTheDocument();
});

it('hides the left arrow on the first image', function () {
	const { container, debug } = render(
		<Carousel
			photos={TEST_IMAGES}
			title="images for testing"
		/>
	);

  debug(container.querySelector('.bi-arrow-left-circle'));

	expect(
		container.querySelector('i.bi-arrow-left-circle')
	).not.toBeInTheDocument();
});

it("hides the right arrow on the last image", function () {
	const { container, debug } = render(
		<Carousel
			photos={TEST_IMAGES}
			title="images for testing"
		/>
	);
  const rightArrow = container.querySelector('.bi-arrow-right-circle');
	fireEvent.click(rightArrow);
	fireEvent.click(rightArrow);

  debug(container.querySelector('.bi-arrow-right-circle'));

	expect(
		container.querySelector('i.bi-arrow-right-circle')
	).not.toBeInTheDocument();
});

// smoke test
it('renders the Carousel component', function () {
	render(
		<Carousel
			photos={TEST_IMAGES}
			title="images for testing"
		/>
	);
});

// snapshot test
it('matches the initial snapshot', function () {
	const { container } = render(
		<Carousel
			photos={TEST_IMAGES}
			title="images for testing"
		/>
	);
	expect(container).toMatchSnapshot();
});
