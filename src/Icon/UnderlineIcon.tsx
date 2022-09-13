import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const UnderlineIcon: React.FC<Props> = ({
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
				d="M11.5 16.8889C14.1007 16.8889 16.2143 14.7967 16.2143 12.2222V6H14.25V12.2222C14.25 13.7233 13.0164 14.9444 11.5 14.9444C9.98357 14.9444 8.75 13.7233 8.75 12.2222V6H6.78571V12.2222C6.78571 14.7967 8.89929 16.8889 11.5 16.8889ZM6 18.4444V20H17V18.4444H6Z"
				fill="#272932"
			/>
		</g>
	</svg>
);
