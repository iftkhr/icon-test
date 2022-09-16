import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const CodingIcon: React.FC<Props> = ({
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
		<g opacity="0.9">
			<path
				d="M14.5056 8.32259C14.2005 8.01747 13.7058 8.01747 13.4007 8.32259C13.0956 8.62771 13.0956 9.12239 13.4007 9.42747L15.9733 12L13.4007 14.5725C13.0956 14.8777 13.0956 15.3724 13.4007 15.6774C13.7057 15.9825 14.2005 15.9825 14.5056 15.6775L17.6306 12.5525C17.9357 12.2474 17.9357 11.7527 17.6306 11.4476L14.5056 8.32259Z"
				fill="white"
			/>
			<path
				d="M8.02677 12L10.5993 9.42746C10.9045 9.12234 10.9045 8.62765 10.5993 8.32257C10.2942 8.0175 9.79954 8.01746 9.49446 8.32257L6.36946 11.4476C6.06435 11.7527 6.06435 12.2474 6.36946 12.5525L9.49446 15.6775C9.7995 15.9825 10.2943 15.9825 10.5994 15.6775C10.9045 15.3723 10.9045 14.8777 10.5994 14.5726L8.02677 12Z"
				fill="white"
			/>
			<path
				d="M19.6562 3.40625H4.34375C3.05141 3.40625 2 4.45766 2 5.75V18.25C2 19.5423 3.05141 20.5938 4.34375 20.5938H19.6562C20.9486 20.5938 22 19.5423 22 18.25V5.75C22 4.45766 20.9486 3.40625 19.6562 3.40625ZM20.4375 18.25C20.4375 18.6808 20.087 19.0312 19.6562 19.0312H4.34375C3.91297 19.0312 3.5625 18.6808 3.5625 18.25V5.75C3.5625 5.31922 3.91297 4.96875 4.34375 4.96875H19.6562C20.087 4.96875 20.4375 5.31922 20.4375 5.75V18.25Z"
				fill="white"
			/>
		</g>
	</svg>
);