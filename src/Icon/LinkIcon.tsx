import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const LinkIcon: React.FC<Props> = ({
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
		<rect x="1" y="6" width="17" height="17" rx="8.5" fill="#87DDB4" />
		<path
			d="M9.87891 14.1211L14.1215 9.87845"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M8.46432 11.2925C8.46432 11.2925 7.17141 12.5854 6.343 13.4138C5.28236 14.4745 5.1079 16.4214 6.343 17.6565C7.57811 18.8916 9.52498 18.7171 10.5856 17.6565C11.6463 16.5958 12.707 15.5352 12.707 15.5352"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M15.5357 12.7075C15.5357 12.7075 16.8286 11.4146 17.657 10.5862C18.7176 9.52548 18.8921 7.57863 17.657 6.34352C16.4219 5.10842 14.475 5.28286 13.4144 6.34352C12.3537 7.40418 11.293 8.46484 11.293 8.46484"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
	</svg>
);
