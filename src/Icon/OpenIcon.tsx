import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const OpenIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "16",
	width = "16",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 16 16"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<g opacity="0.5">
			<path
				d="M8.38573 10.5323C8.18573 10.7748 7.81426 10.7748 7.61427 10.5323L4.34466 6.56814C4.07569 6.24202 4.30766 5.75 4.73039 5.75L11.2696 5.75C11.6923 5.75 11.9243 6.24202 11.6553 6.56814L8.38573 10.5323Z"
				fill="#272932"
			/>
		</g>
	</svg>
);
