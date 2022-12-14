import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const CheckedIcon2: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "11",
	width = "16",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 16 11"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			d="M14.7201 2.16656L7.20571 9.68005C6.99863 9.88801 6.71826 10.0033 6.42508 10.0033C6.13191 10.0033 5.85154 9.88713 5.64446 9.68005L1.13734 5.17293C0.705523 4.742 0.705523 4.04306 1.13734 3.61257C1.56871 3.1812 2.26721 3.1812 2.69814 3.61257L6.42464 7.33863L13.158 0.605318C13.5893 0.173945 14.2878 0.173945 14.7183 0.605318C15.1515 1.03669 15.1515 1.73563 14.7201 2.16656Z"
			fill="white"
		/>
	</svg>
);
