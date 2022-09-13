import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const SaveDataIcon: React.FC<Props> = ({
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
			d="M15.4175 10.0783C14.2449 10.0783 12.8563 9.75893 11.7554 9.42466C11.0786 9.21915 10.3608 9.71066 10.3608 10.418V15.7808C10.3608 16.0735 10.487 16.3543 10.7191 16.5327C11.9399 17.4708 13.3879 18.0568 15.4175 18.0568C17.4435 18.0568 18.7506 17.6011 19.7161 16.7309C19.9056 16.5601 20 16.311 20 16.0558V10.2967C20 9.62352 19.3552 9.16286 18.7198 9.38531C17.7514 9.72437 16.6069 10.0783 15.4175 10.0783Z"
			fill="#87DDB4"
		/>
		<path
			d="M15.6377 12.2646C15.6377 13.1017 14.009 13.7803 12 13.7803C9.99104 13.7803 8.36243 13.1017 8.36243 12.2646"
			stroke="#272932"
			stroke-width="1.2"
		/>
		<path
			d="M8.36243 9.53516L8.36243 15.1229C8.36243 15.96 9.99104 16.6386 12 16.6386C14.009 16.6386 15.6377 15.96 15.6377 15.1229V9.53516"
			stroke="#272932"
			stroke-width="1.2"
		/>
		<ellipse
			cx="12"
			cy="9.58342"
			rx="3.63762"
			ry="1.58342"
			stroke="#272932"
			stroke-width="1.2"
			stroke-linecap="round"
		/>
		<path
			d="M4 17V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V17"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M20 7L20 6C20 4.89543 19.1046 4 18 4L6 4C4.89543 4 4 4.89543 4 6L4 7"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
	</svg>
);
