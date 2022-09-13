import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const WaitEmailResIcon: React.FC<Props> = ({
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
			d="M9.78334 8.08629L16.5928 3.75093C18.3254 2.6478 17.4687 -0.0377175 15.4173 0.0664082L3.41826 0.675466C0.635996 0.81669 -0.468138 4.34367 1.73694 6.04619L4.04239 7.82621C5.7101 9.11383 8.00603 9.21785 9.78334 8.08629Z"
			fill="#ADE2FF"
		/>
		<path
			d="M20.4655 8V6C20.4655 4.89543 19.5701 4 18.4655 4L11.9926 4L5.53455 4C4.42998 4 3.53455 4.89543 3.53455 6V12.9494C3.53455 14.054 4.42998 14.9494 5.53455 14.9494H9M4.21269 4.90503L10.9244 9.11334C11.5771 9.52261 12.4068 9.52058 13.0575 9.10813L19.6886 4.90503"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M17 16L20 13L17 10"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M20 17C20 19.2091 18.2091 21 16 21C13.7909 21 12 19.2091 12 17C12 14.7909 13.7909 13 16 13H19.5"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
	</svg>
);
