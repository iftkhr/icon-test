import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const CodeIcon: React.FC<Props> = ({
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
			<path
				d="M9.83335 15.8333L6.00002 12L9.83335 8.16667L8.66669 7L3.66669 12L8.66669 17L9.83335 15.8333ZM14.1667 15.8333L18 12L14.1667 8.16667L15.3334 7L20.3334 12L15.3334 17L14.1667 15.8333Z"
				fill="#272932"
			/>
		</g>
	</svg>
);
