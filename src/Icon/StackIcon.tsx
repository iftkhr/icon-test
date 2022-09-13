import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const StackIcon: React.FC<Props> = ({
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
		<rect x="11" y="8" width="11" height="16" rx="2" fill="#ADE2FF" />
		<path
			d="M8 5.1095L8 18.8907C8 20.0539 8.94814 21.0001 10.1135 21.0001L13.8865 21.0001C15.0519 21.0001 16 20.0539 16 18.8907L16 5.1095C16 3.94639 15.0519 3.00012 13.8864 3.00012L10.1135 3.00012C8.94814 3.00012 8 3.94639 8 5.1095ZM13.8864 4.40637C14.2749 4.40637 14.591 4.72179 14.591 5.1095L14.591 18.8907C14.591 19.2784 14.2749 19.5939 13.8865 19.5939L10.1135 19.5939C9.72508 19.5939 9.40903 19.2784 9.40903 18.8907L9.40903 5.1095C9.40903 4.72179 9.72508 4.40637 10.1135 4.40637L13.8864 4.40637Z"
			fill="#272932"
		/>
	</svg>
);
