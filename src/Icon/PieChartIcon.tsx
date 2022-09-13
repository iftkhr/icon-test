import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const PieChartIcon: React.FC<Props> = ({
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
		<rect x="7" y="7" width="17" height="17" rx="8.5" fill="#ADE2FF" />
		<path
			d="M18.6518 7.55544C19.3449 8.59275 19.7832 9.77376 19.9376 11.0026C20.0064 11.5506 19.5523 12 19 12H13C12.4477 12 12 12.4477 12 13L12 19C12 19.5523 11.5506 20.0064 11.0026 19.9376C9.77376 19.7832 8.59275 19.3449 7.55544 18.6518C6.23984 17.7727 5.21446 16.5233 4.60896 15.0615C4.00346 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21446 17.7727 6.23984 18.6518 7.55544Z"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M13 12L4 12"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
	</svg>
);
