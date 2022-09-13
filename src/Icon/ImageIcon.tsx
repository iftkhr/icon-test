import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const ImageIcon: React.FC<Props> = ({
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
				d="M17.25 6.75V17.25H6.75V6.75H17.25ZM17.25 5.25H6.75C5.925 5.25 5.25 5.925 5.25 6.75V17.25C5.25 18.075 5.925 18.75 6.75 18.75H17.25C18.075 18.75 18.75 18.075 18.75 17.25V6.75C18.75 5.925 18.075 5.25 17.25 5.25ZM13.605 11.895L11.355 14.7975L9.75 12.855L7.5 15.75H16.5L13.605 11.895Z"
				fill="#272932"
			/>
		</g>
	</svg>
);
