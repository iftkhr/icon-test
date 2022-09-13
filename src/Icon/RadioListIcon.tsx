import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const RadioListIcon: React.FC<Props> = ({
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
		<rect x="2" y="6" width="13" height="11" rx="2" fill="#DAC6E1" />
		<path
			d="M12 6.68555L19 6.68555"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M12 11.6855L19 11.6855"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M12 16.6855H19"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<circle
			cx="6.54492"
			cy="6.68555"
			r="1.25"
			stroke="#272932"
			stroke-width="1.5"
		/>
		<circle
			cx="6.54492"
			cy="11.6855"
			r="1.25"
			stroke="#272932"
			stroke-width="1.5"
		/>
		<circle
			cx="6.54492"
			cy="16.6855"
			r="1.25"
			stroke="#272932"
			stroke-width="1.5"
		/>
	</svg>
);
