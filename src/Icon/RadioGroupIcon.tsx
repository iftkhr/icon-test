import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const RadioGroupIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "16",
	width = "19",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 19 16"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			d="M6.25122 1.95996H17.7692C18.1575 1.95996 18.4723 2.27476 18.4723 2.66309C18.4723 3.05141 18.1575 3.36621 17.7692 3.36621H6.25122C5.8629 3.36621 5.5481 3.05141 5.5481 2.66309C5.5481 2.27476 5.8629 1.95996 6.25122 1.95996Z"
			fill="#677C95"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M2.26155 4.41446C3.22876 4.41446 4.01285 3.63037 4.01285 2.66316C4.01285 1.69595 3.22876 0.911865 2.26155 0.911865C1.29434 0.911865 0.510254 1.69595 0.510254 2.66316C0.510254 3.63037 1.29434 4.41446 2.26155 4.41446ZM2.26155 3.1945C2.555 3.1945 2.79289 2.95661 2.79289 2.66316C2.79289 2.36971 2.555 2.13182 2.26155 2.13182C1.9681 2.13182 1.73021 2.36971 1.73021 2.66316C1.73021 2.95661 1.9681 3.1945 2.26155 3.1945Z"
			fill="#677C95"
		/>
		<path
			d="M6.28906 7.44287H17.8071C18.1954 7.44287 18.5102 7.75767 18.5102 8.146C18.5102 8.53432 18.1954 8.84912 17.8071 8.84912H6.28906C5.90074 8.84912 5.58594 8.53432 5.58594 8.146C5.58594 7.75767 5.90074 7.44287 6.28906 7.44287Z"
			fill="#677C95"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M2.26155 9.89737C3.22876 9.89737 4.01285 9.11328 4.01285 8.14607C4.01285 7.17886 3.22876 6.39478 2.26155 6.39478C1.29434 6.39478 0.510254 7.17886 0.510254 8.14607C0.510254 9.11328 1.29434 9.89737 2.26155 9.89737ZM2.26155 8.67741C2.555 8.67741 2.79289 8.43952 2.79289 8.14607C2.79289 7.85262 2.555 7.61473 2.26155 7.61473C1.9681 7.61473 1.73021 7.85262 1.73021 8.14607C1.73021 8.43952 1.9681 8.67741 2.26155 8.67741Z"
			fill="#677C95"
		/>
		<path
			d="M6.25122 12.9258H17.7692C18.1575 12.9258 18.4723 13.2406 18.4723 13.6289C18.4723 14.0172 18.1575 14.332 17.7692 14.332H6.25122C5.8629 14.332 5.5481 14.0172 5.5481 13.6289C5.5481 13.2406 5.8629 12.9258 6.25122 12.9258Z"
			fill="#677C95"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M2.26155 15.3803C3.22876 15.3803 4.01285 14.5962 4.01285 13.629C4.01285 12.6618 3.22876 11.8777 2.26155 11.8777C1.29434 11.8777 0.510254 12.6618 0.510254 13.629C0.510254 14.5962 1.29434 15.3803 2.26155 15.3803ZM2.26155 14.1603C2.555 14.1603 2.79289 13.9224 2.79289 13.629C2.79289 13.3355 2.555 13.0976 2.26155 13.0976C1.9681 13.0976 1.73021 13.3355 1.73021 13.629C1.73021 13.9224 1.9681 14.1603 2.26155 14.1603Z"
			fill="#677C95"
		/>
	</svg>
);
