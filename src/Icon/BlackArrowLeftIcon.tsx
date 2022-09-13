import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const BlackArrowLeftIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "8",
	width = "6",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 6 8"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			d="M0.467669 3.61427C0.225192 3.81427 0.225193 4.18574 0.46767 4.38573L4.43186 7.65534C4.75798 7.92431 5.25 7.69234 5.25 7.26961L5.25 0.730393C5.25 0.307659 4.75798 0.0756862 4.43186 0.344666L0.467669 3.61427Z"
			fill="#272932"
		/>
	</svg>
);
