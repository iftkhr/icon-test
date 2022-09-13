import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const RunStatementRuleIcon: React.FC<Props> = ({
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
			d="M19.7098 9.6357C19.7098 12.5983 17.3082 14.9999 14.3456 14.9999C11.383 14.9999 8.98138 12.5983 8.98138 9.6357C8.98138 6.67313 11.383 4.27148 14.3456 4.27148C17.3082 4.27148 19.7098 6.67313 19.7098 9.6357Z"
			fill="#ADE2FF"
		/>
		<path
			d="M17.8283 14.5769C18.1396 14.773 18.1396 15.227 17.8283 15.4231L15.1415 17.1153C14.8085 17.325 14.375 17.0857 14.375 16.6922L14.375 13.3078C14.375 12.9143 14.8085 12.675 15.1415 12.8847L17.8283 14.5769Z"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<circle
			cx="5.55449"
			cy="18.8448"
			r="1.84478"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M3.5 3.75488H7.5L6.86365 12.5072C6.8135 13.1969 6.23932 13.7309 5.5478 13.7309V13.7309C4.86178 13.7309 4.29023 13.2051 4.23307 12.5215L3.5 3.75488Z"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<circle
			cx="16"
			cy="15"
			r="6"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);
