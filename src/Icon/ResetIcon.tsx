import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const ResetIcon: React.FC<Props> = ({
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
		<path
			d="M13.25 8C13.25 9.03835 12.9421 10.0534 12.3652 10.9167C11.7883 11.7801 10.9684 12.453 10.0091 12.8504C9.04978 13.2477 7.99418 13.3517 6.97578 13.1491C5.95738 12.9466 5.02192 12.4465 4.28769 11.7123C3.55346 10.9781 3.05345 10.0426 2.85088 9.02422C2.6483 8.00582 2.75227 6.95022 3.14963 5.99091C3.54699 5.0316 4.2199 4.21166 5.08326 3.63478C5.94661 3.05791 6.96165 2.75 8 2.75"
			stroke="#EE3E54"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M12.881 5.35593C13.0003 5.18373 13.2549 5.18373 13.3742 5.35593L15.3995 8.27915C15.5373 8.47811 15.3949 8.75 15.1529 8.75H11.1024C10.8603 8.75 10.7179 8.47811 10.8558 8.27915L12.881 5.35593Z"
			fill="#EE3E54"
		/>
	</svg>
);
