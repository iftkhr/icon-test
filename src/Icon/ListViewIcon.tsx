import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const ListViewIcon: React.FC<Props> = ({
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
				x="6.5"
				y="5.5"
				width="11"
				height="2"
				rx="0.5"
				stroke="black"
			/>
			<rect
				x="6.5"
				y="10.5"
				width="11"
				height="2"
				rx="0.5"
				stroke="black"
			/>
			<rect
				x="6.5"
				y="15.5"
				width="11"
				height="2"
				rx="0.5"
				stroke="black"
			/>
		</g>
	</svg>
);
