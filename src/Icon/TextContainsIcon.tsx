import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const TextContainsIcon: React.FC<Props> = ({
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
			d="M4.50136 5.456H7.08136V6.392H5.70136V15.248H7.08136V16.184H4.50136V5.456ZM16.9188 16.184V15.248H18.2988V6.392H16.9188V5.456H19.4988V16.184H16.9188Z"
			fill="#1D6295"
		/>
		<path
			d="M11.3443 7.94H9.0243V6.88H14.9743V7.94H12.6443V14H11.3443V7.94Z"
			fill="#1D6295"
		/>
	</svg>
);
