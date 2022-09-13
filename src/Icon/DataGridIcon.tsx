import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const DataGridIcon: React.FC<Props> = ({
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
			d="M18.8818 7.5533C18.9054 7.52967 18.9298 7.50826 18.9544 7.489C19.1175 7.92193 19.2456 8.36932 19.3367 8.82709C19.6646 10.4759 19.4963 12.185 18.853 13.7382C18.2096 15.2913 17.1202 16.6188 15.7223 17.5528C15.3343 17.8121 14.9273 18.0379 14.5058 18.2287C14.5021 18.1977 14.5 18.1653 14.5 18.1319V16.3291C14.5769 16.2697 14.6678 16.2046 14.774 16.1336C15.8912 15.3872 16.7619 14.3262 17.276 13.085C17.7902 11.8437 17.9247 10.4778 17.6626 9.16008C17.6376 9.03475 17.6194 8.92442 17.607 8.82808L18.8818 7.5533ZM14.5 15.7182C14.5 15.72 14.5 15.7217 14.5 15.7235V15.7182ZM17.1751 9.26003L17.1788 9.25632L17.1751 9.26003Z"
			stroke="#FFADAD"
			stroke-width="7"
		/>
		<path
			d="M6 8H18"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M16 6L16 18"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M6 16H18"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M8 6L8 18"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
	</svg>
);
