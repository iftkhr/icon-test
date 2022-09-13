import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const ThreeDotsIcon: React.FC<Props> = ({
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
			<circle cx="12" cy="5" r="2" fill="#272932" />
			<circle cx="12" cy="12" r="2" fill="#272932" />
			<circle cx="12" cy="19" r="2" fill="#272932" />
		</g>
	</svg>
);
