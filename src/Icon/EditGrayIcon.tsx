import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const EditGrayIcon: React.FC<Props> = ({
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
		<g opacity="0.5">
			<path
				d="M10.3159 3.90332C10.5742 3.64508 10.9244 3.5 11.2896 3.5C11.6548 3.5 12.0051 3.64508 12.2633 3.90332C12.5216 4.16156 12.6667 4.51182 12.6667 4.87703C12.6667 5.24224 12.5216 5.59249 12.2633 5.85073L6.09655 12.0175L3.82338 12.5858C3.6769 12.6224 3.54423 12.4898 3.58085 12.3433L4.14914 10.0701L10.3159 3.90332Z"
				stroke="#272932"
				stroke-width="1.2"
				stroke-linecap="round"
			/>
			<path
				d="M5 10L6 11"
				stroke="#272932"
				stroke-width="1.2"
				stroke-linecap="round"
			/>
		</g>
	</svg>
);
