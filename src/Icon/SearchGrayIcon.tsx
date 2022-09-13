import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const SearchGrayIcon: React.FC<Props> = ({
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
		<g opacity="0.2">
			<circle
				cx="11.5"
				cy="11.5"
				r="5.75"
				stroke="#272932"
				stroke-width="1.5"
			/>
			<line
				x1="15.5303"
				y1="15.4697"
				x2="18.5303"
				y2="18.4697"
				stroke="#272932"
				stroke-width="1.5"
			/>
		</g>
	</svg>
);
