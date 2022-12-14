import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const DeleteIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "19",
	width = "16",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 16 19"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M15.5938 4.3457C15.5938 4.73404 15.279 5.04883 14.8906 5.04883H14.1357L13.1308 18.1806C13.1027 18.547 12.7972 18.8301 12.4297 18.8301H3.57031C3.20279 18.8301 2.89728 18.547 2.86923 18.1806L1.86425 5.04883H1.10938C0.721039 5.04883 0.40625 4.73404 0.40625 4.3457C0.40625 3.95737 0.721039 3.64258 1.10938 3.64258H4.55469V2.9043C4.55469 1.76056 5.48517 0.830078 6.62891 0.830078H9.37109C10.5148 0.830078 11.4453 1.76056 11.4453 2.9043V3.64258H14.8906C15.279 3.64258 15.5938 3.95737 15.5938 4.3457ZM5.96094 3.64258H10.0391V2.9043C10.0391 2.53596 9.73943 2.23633 9.37109 2.23633H6.62891C6.26057 2.23633 5.96094 2.53596 5.96094 2.9043V3.64258ZM12.7254 5.04883H3.27461L4.22169 17.4238H11.7783L12.7254 5.04883Z"
			fill="#677C95"
		/>
	</svg>
);
