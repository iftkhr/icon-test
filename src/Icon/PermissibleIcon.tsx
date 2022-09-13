import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const PermissibleIcon: React.FC<Props> = ({
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
				d="M8 5L5 5"
				stroke="#272932"
				stroke-width="1.2"
				stroke-linecap="round"
			/>
			<path
				d="M6 7H5"
				stroke="#272932"
				stroke-width="1.2"
				stroke-linecap="round"
			/>
			<path
				d="M12 9L11 9"
				stroke="#272932"
				stroke-width="1.2"
				stroke-linecap="round"
			/>
			<path
				d="M12 11L9 11"
				stroke="#272932"
				stroke-width="1.2"
				stroke-linecap="round"
			/>
			<path
				d="M12 5L6 11"
				stroke="#272932"
				stroke-width="1.2"
				stroke-linecap="round"
			/>
			<path
				d="M6 11L4 9"
				stroke="#272932"
				stroke-width="1.2"
				stroke-linecap="round"
			/>
		</g>
	</svg>
);
