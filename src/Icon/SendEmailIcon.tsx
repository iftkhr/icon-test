import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const SendEmailIcon: React.FC<Props> = ({
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
			d="M9.7834 8.08629L16.5928 3.75093C18.3255 2.6478 17.4687 -0.0377175 15.4173 0.0664082L3.41832 0.675466C0.636057 0.81669 -0.468077 4.34367 1.737 6.04619L4.04245 7.82621C5.71017 9.11383 8.00609 9.21785 9.7834 8.08629Z"
			fill="#ADE2FF"
		/>
		<path
			d="M20.4655 14.5V6C20.4655 4.89543 19.5701 4 18.4655 4L11.9926 4L5.53455 4C4.42998 4 3.53455 4.89543 3.53455 6V12.9494C3.53455 14.054 4.42998 14.9494 5.53455 14.9494H8M4.21269 4.90503L10.9244 9.11334C11.5771 9.52261 12.4068 9.52058 13.0575 9.10813L19.6886 4.90503"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M16 21L19 18L16 15"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M19 18L15 18"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M12 14L12 15C12 16.6569 13.3431 18 15 18V18"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
	</svg>
);
