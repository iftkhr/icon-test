import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const SumIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "20",
	width = "24",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 24 20"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<rect
			x="0.5"
			y="0.5"
			width="23"
			height="19"
			rx="2.5"
			stroke="#1D6295"
		/>
		<path
			d="M15.0746 5.716H10.6946L13.2746 9.328L13.2626 10.3L10.6946 13.924H15.0746V15.184H8.90663V14.068L11.9186 9.82L8.90663 5.572V4.456H15.0746V5.716Z"
			fill="#1D6295"
		/>
	</svg>
);
