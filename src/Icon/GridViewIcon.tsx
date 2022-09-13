import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const GridViewIcon: React.FC<Props> = ({
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
				x="6.25"
				y="6.25"
				width="4.5"
				height="4.5"
				rx="1.5"
				stroke="black"
			/>
			<rect
				x="6.25"
				y="13.25"
				width="4.5"
				height="4.5"
				rx="1.5"
				stroke="black"
			/>
			<rect
				x="13.25"
				y="6.25"
				width="4.5"
				height="4.5"
				rx="1.5"
				stroke="black"
			/>
			<rect
				x="13.25"
				y="13.25"
				width="4.5"
				height="4.5"
				rx="1.5"
				stroke="black"
			/>
		</g>
	</svg>
);
