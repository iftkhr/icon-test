import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const LogStepIcon: React.FC<Props> = ({
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
			d="M0 18.1966V15.1351C0 14.3415 0.880096 13.8641 1.54533 14.2969L4.57371 16.2671C4.90251 16.481 5.32602 16.4829 5.65675 16.272L17.4322 8.76196C18.0979 8.33741 18.9699 8.81554 18.9699 9.60508V21.7457C18.9699 22.3804 18.3864 22.8545 17.7652 22.7246L0.795289 19.1755C0.331928 19.0786 0 18.67 0 18.1966Z"
			fill="#ADE2FF"
		/>
		<path
			d="M4.21269 10.1882L10.9244 14.3965C11.5771 14.8058 12.4068 14.8038 13.0575 14.3913L19.6886 10.1882M8.0323 9.2832H5.53455C4.42998 9.2832 3.53455 10.1786 3.53455 11.2832V18.2326C3.53455 19.3372 4.42997 20.2326 5.53454 20.2326H18.4655C19.5701 20.2326 20.4655 19.3372 20.4655 18.2326V11.2832C20.4655 10.1786 19.5701 9.2832 18.4655 9.2832H16.0382"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M9.40898 5.00437L11.4365 7.98441C11.6323 8.27215 12.0548 8.27686 12.2569 7.99355L16.3844 2.2085"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);
