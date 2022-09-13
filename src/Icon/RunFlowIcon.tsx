import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const RunFlowIcon: React.FC<Props> = ({
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
		<path
			d="M0 18.6973V5.27114C0 4.47535 0.884384 3.99838 1.54934 4.43554L11.6044 11.046C12.2002 11.4377 12.2063 12.3093 11.6161 12.7093L1.56109 19.5251C0.897075 19.9752 0 19.4995 0 18.6973Z"
			fill="#DAC6E1"
		/>
		<path
			d="M15.6566 11.1538C16.2793 11.5461 16.2793 12.4539 15.6566 12.8462L10.2829 16.2307C9.61702 16.6501 8.75 16.1715 8.75 15.3845L8.75 8.6155C8.75 7.82851 9.61702 7.34993 10.2829 7.76935L15.6566 11.1538Z"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<rect
			x="3"
			y="3"
			width="18"
			height="18"
			rx="2"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
	</svg>
);
