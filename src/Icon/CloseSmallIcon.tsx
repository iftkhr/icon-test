import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const CloseSmallIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "17",
	width = "17",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 17 17"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<g opacity="0.5">
			<rect
				x="5.43555"
				y="10.6211"
				width="7.33455"
				height="1.33333"
				rx="0.666667"
				transform="rotate(-45 5.43555 10.6211)"
				fill="#272932"
			/>
			<rect
				x="6.37793"
				y="5.43555"
				width="7.33552"
				height="1.33333"
				rx="0.666667"
				transform="rotate(45 6.37793 5.43555)"
				fill="#272932"
			/>
		</g>
	</svg>
);
