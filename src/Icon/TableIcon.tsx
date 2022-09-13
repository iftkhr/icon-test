import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const TableIcon: React.FC<Props> = ({
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
				d="M17.9211 5H6.07895C5.21053 5 4.5 5.7 4.5 6.55556V17.4444C4.5 18.3 5.21053 19 6.07895 19H17.9211C18.7895 19 19.5 18.3 19.5 17.4444V6.55556C19.5 5.7 18.7895 5 17.9211 5ZM17.9211 6.55556V8.88889H6.07895V6.55556H17.9211ZM13.9737 17.4444H10.0263V10.4444H13.9737V17.4444ZM6.07895 10.4444H8.44737V17.4444H6.07895V10.4444ZM15.5526 17.4444V10.4444H17.9211V17.4444H15.5526Z"
				fill="#272932"
			/>
		</g>
	</svg>
);
