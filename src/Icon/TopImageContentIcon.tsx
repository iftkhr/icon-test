import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const TopImageContentIcon: React.FC<Props> = ({
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
			d="M14.8537 4.45796V13.6254H5.5V4.45796H14.8537ZM14.8537 2.95796L5.5 2.95796C4.675 2.95796 4 3.63296 4 4.45796L4 13.6254C4 14.4504 4.675 15.1254 5.5 15.1254H14.8537C15.6787 15.1254 16.3537 14.4504 16.3537 13.6254V4.45796C16.3537 3.63296 15.6787 2.95796 14.8537 2.95796ZM11.1586 9.10217L9.62037 10.9844L8.64888 9.97247L6.43328 12.626H13.7897L11.1586 9.10217Z"
			fill="#272932"
		/>
		<path
			d="M19.2271 16.3754L4 16.3754V17.9309L19.2271 17.9309V16.3754ZM4 21.042H20.9629V19.4865H4V21.042Z"
			fill="#272932"
		/>
	</svg>
);
