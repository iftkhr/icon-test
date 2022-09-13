import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const SliderIcon: React.FC<Props> = ({
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
		<rect x="6" y="4" width="16" height="16" rx="8" fill="#DAC6E1" />
		<circle cx="5.5" cy="12" r="0.75" stroke="#272932" stroke-width="1.5" />
		<circle cx="12" cy="12" r="1.75" stroke="#272932" stroke-width="1.5" />
		<circle
			cx="18.5"
			cy="12"
			r="0.75"
			stroke="#272932"
			stroke-width="1.5"
		/>
	</svg>
);
