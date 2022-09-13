import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const H2Icon: React.FC<Props> = ({
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
		<g opacity="0.5">
			<path
				d="M4.86084 15.9999H6.44181V12.2925H10.4858V15.9999H12.0711V7.27264H10.4858V10.9672H6.44181V7.27264H4.86084V15.9999Z"
				fill="#272932"
			/>
			<path
				d="M13.7053 15.9999H19.6883V14.6789H15.8871V14.6192L17.3914 13.0894C19.0874 11.4616 19.5562 10.6689 19.5562 9.68457C19.5562 8.22292 18.3672 7.15332 16.6116 7.15332C14.8814 7.15332 13.6542 8.22718 13.6542 9.88485H15.1584C15.1584 8.99423 15.7209 8.43599 16.5902 8.43599C17.4212 8.43599 18.0391 8.94309 18.0391 9.76554C18.0391 10.4942 17.5959 11.0141 16.7351 11.8877L13.7053 14.8579V15.9999Z"
				fill="#272932"
			/>
		</g>
	</svg>
);
