import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const DropdownWhiteIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "17",
	width = "16",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 16 17"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			d="M8.38573 11.0323C8.18573 11.2748 7.81426 11.2748 7.61427 11.0323L4.34466 7.06814C4.07569 6.74202 4.30766 6.25 4.73039 6.25L11.2696 6.25C11.6923 6.25 11.9243 6.74202 11.6553 7.06814L8.38573 11.0323Z"
			fill="white"
		/>
	</svg>
);
