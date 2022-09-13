import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const RunRuleSetIcon: React.FC<Props> = ({
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
			d="M16.6584 4.53353L16.6584 15.4947C16.6584 16.2687 15.817 16.7493 15.1504 16.356L6.00166 10.9592C5.35089 10.5754 5.34456 9.63617 5.99009 9.24355L15.1388 3.67915C15.8052 3.27383 16.6584 3.75354 16.6584 4.53353Z"
			fill="#DAC6E1"
		/>
		<path
			d="M3.00005 4.79587L5.02758 7.77592C5.22335 8.06365 5.64587 8.06836 5.84799 7.78506L9.97546 2"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M3.00005 11.7959L5.02758 14.7759C5.22335 15.0637 5.64587 15.0684 5.84799 14.7851L9.97546 9"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M3.00005 18.7959L5.02758 21.7759C5.22335 22.0637 5.64587 22.0684 5.84799 21.7851L9.97546 16"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M17.8283 15.5769C18.1396 15.773 18.1396 16.227 17.8283 16.4231L15.1415 18.1153C14.8085 18.325 14.375 18.0857 14.375 17.6922L14.375 14.3078C14.375 13.9143 14.8085 13.675 15.1415 13.8847L17.8283 15.5769Z"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M11.3169 12.2489C12.4165 10.8778 14.1057 10 16 10C19.3137 10 22 12.6863 22 16C22 19.3137 19.3137 22 16 22C14.1057 22 12.4165 21.1222 11.3169 19.7511"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);
