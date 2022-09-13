import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const OpenReverseIcon: React.FC<Props> = ({
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
		<path
			d="M4.96767 8.38573C4.72519 8.18573 4.72519 7.81426 4.96767 7.61427L8.93186 4.34467C9.25798 4.07569 9.75 4.30766 9.75 4.73039L9.75 11.2696C9.75 11.6923 9.25798 11.9243 8.93186 11.6553L4.96767 8.38573Z"
			fill="#4050A6"
		/>
	</svg>
);
