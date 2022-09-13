import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const ReadFileIcon: React.FC<Props> = ({
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
			d="M15.9758 6.48198V1.83499C15.9758 0.958022 17.0242 0.505807 17.6621 1.10764L23.6471 6.75463C24.3053 7.37569 23.8658 8.48198 22.9608 8.48198H17.9758C16.8713 8.48198 15.9758 7.58655 15.9758 6.48198Z"
			fill="#FFADAD"
		/>
		<path
			d="M7.79059 10.6505L10.6238 9.88313C11.3654 9.68229 12.0471 10.358 11.8528 11.1013L11.1082 13.9494L7.6032 17.5107C6.90031 18.2136 5.26036 18.1667 4.41679 17.3233C3.47019 16.3768 3.62932 14.7928 4.26665 14.1556L7.79059 10.6505Z"
			fill="#FFADAD"
		/>
		<path
			d="M6.90213 20.3138C6.59224 20.6237 6.17193 20.7978 5.73368 20.7978C5.29543 20.7978 4.87513 20.6237 4.56523 20.3138C4.25534 20.0039 4.08125 19.5836 4.08125 19.1453C4.08125 18.7071 4.25534 18.2868 4.56523 17.9769L7.76427 14.779L10.5567 14.0808C10.7032 14.0442 10.8359 14.1769 10.7993 14.3234L10.1012 17.1159L6.90213 20.3138Z"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M20 9.10036V16C20 17.1046 19.1046 18 18 18H13M14.9735 4H11C9.89543 4 9 4.89543 9 6V11"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M14.397 4.5V7.75243C14.397 8.857 15.2924 9.75243 16.397 9.75243H20"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="square"
		/>
		<path
			d="M15.0399 4.05371L19.9999 9.0643"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
	</svg>
);
