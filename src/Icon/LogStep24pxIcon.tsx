import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const LogStep24pxIcon: React.FC<Props> = ({
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
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M4.25 5.5C4.25 4.25736 5.25736 3.25 6.5 3.25H17.5C18.7426 3.25 19.75 4.25736 19.75 5.5C19.75 6.74264 18.7426 7.75 17.5 7.75H6.5C5.25736 7.75 4.25 6.74264 4.25 5.5ZM6.5 4.75C6.08579 4.75 5.75 5.08579 5.75 5.5C5.75 5.91421 6.08579 6.25 6.5 6.25H17.5C17.9142 6.25 18.25 5.91421 18.25 5.5C18.25 5.08579 17.9142 4.75 17.5 4.75H6.5Z"
			fill="#272932"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M7.25 11.5C7.25 10.2574 8.25736 9.25 9.5 9.25H17.5C18.7426 9.25 19.75 10.2574 19.75 11.5C19.75 12.7426 18.7426 13.75 17.5 13.75H9.5C8.25736 13.75 7.25 12.7426 7.25 11.5ZM9.5 10.75C9.08579 10.75 8.75 11.0858 8.75 11.5C8.75 11.9142 9.08579 12.25 9.5 12.25H17.5C17.9142 12.25 18.25 11.9142 18.25 11.5C18.25 11.0858 17.9142 10.75 17.5 10.75H9.5Z"
			fill="#272932"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M14.25 17.5C14.25 16.2574 15.2574 15.25 16.5 15.25H17.5C18.7426 15.25 19.75 16.2574 19.75 17.5C19.75 18.7426 18.7426 19.75 17.5 19.75H16.5C15.2574 19.75 14.25 18.7426 14.25 17.5ZM16.5 16.75C16.0858 16.75 15.75 17.0858 15.75 17.5C15.75 17.9142 16.0858 18.25 16.5 18.25H17.5C17.9142 18.25 18.25 17.9142 18.25 17.5C18.25 17.0858 17.9142 16.75 17.5 16.75H16.5Z"
			fill="#272932"
		/>
	</svg>
);
