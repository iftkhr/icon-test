import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const ErrorIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "16",
	width = "16",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 16 16"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			d="M5 4.5C5 4.22386 4.77267 3.99359 4.50506 4.06171C3.63988 4.28197 3 5.06626 3 6V10C3 11.1046 3.89543 12 5 12H10L12.5336 13.6891C12.733 13.822 13 13.6791 13 13.4394V6C13 5.06626 12.3601 4.28197 11.4949 4.06171C11.2273 3.99359 11 4.22386 11 4.5C11 4.77614 11.2373 4.98964 11.4795 5.12224C11.7897 5.29203 12 5.62145 12 6V12.1315L10.3028 11H5C4.44772 11 4 10.5523 4 10V6C4 5.62145 4.21034 5.29203 4.52051 5.12224C4.76274 4.98964 5 4.77614 5 4.5Z"
			fill="#EE3E54"
		/>
		<circle cx="8" cy="8" r="1" fill="#EE3E54" />
		<path
			d="M7.06652 1.99779C7.03052 1.4578 7.45882 1 8 1C8.54118 1 8.96948 1.4578 8.93348 1.99779L8.71101 5.33481C8.68606 5.70913 8.37515 6 8 6C7.62485 6 7.31394 5.70913 7.28899 5.33481L7.06652 1.99779Z"
			fill="#EE3E54"
		/>
	</svg>
);
