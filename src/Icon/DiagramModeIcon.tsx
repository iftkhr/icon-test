import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const DiagramModeIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "24",
	width = "24",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 24 24"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<g opacity="0.5">
			<rect
				x="5.5"
				y="4.5"
				width="4"
				height="4"
				rx="0.5"
				stroke="#272932"
			/>
			<rect
				x="5.5"
				y="15.5"
				width="4"
				height="4"
				rx="0.5"
				stroke="#272932"
			/>
			<rect
				x="15.5"
				y="10.5"
				width="4"
				height="4"
				rx="0.5"
				stroke="#272932"
			/>
			<path
				d="M9.5 17.5002C10.3333 17.3336 11.5149 16.9405 12 15.0002C12.5 13.0004 14.3333 12.3334 15.5 12.5001"
				stroke="#272932"
			/>
			<path
				d="M15.5 12.5C14.6667 12.3341 13.2423 12.5 12.5 9.51236C11.9181 7.17021 10.5 6.5 9.5 6.5"
				stroke="#272932"
			/>
		</g>
	</svg>
);
