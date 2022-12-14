import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const MoveIcon2: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "19",
	width = "19",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 19 19"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<g opacity="0.8">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M8.58763 0.830164H7.9125C7.55767 0.830164 7.27002 1.11782 7.27002 1.47265C7.27002 1.82749 7.55767 2.11514 7.9125 2.11514H14.8322C15.2221 2.11514 15.5393 2.43238 15.5393 2.82226L15.5394 14.6014C15.5394 14.9913 15.4185 15.3085 15.0287 15.3085H15.022C14.6671 15.3085 14.3795 15.5962 14.3795 15.951C14.3795 16.3059 14.6671 16.5936 15.022 16.5936H15.0287C16.1271 16.5936 16.8243 15.6998 16.8243 14.6014V14.3569L16.8244 13.0718V2.82226C16.8244 1.72379 15.9307 0.830078 14.8323 0.830078H9.87269L8.58763 0.830164ZM11.3562 15.951C11.3562 15.5962 11.0685 15.3085 10.7137 15.3085H7.27002C6.88013 15.3085 6.56289 14.9913 6.56289 14.6014V5.77849C6.56289 5.42363 6.27522 5.13596 5.92036 5.13596C5.5655 5.13596 5.27783 5.42363 5.27783 5.77849V14.6014C5.27783 15.6998 6.17155 16.5936 7.27002 16.5936H10.7137C11.0685 16.5936 11.3562 16.3059 11.3562 15.951Z"
				fill="#677C95"
			/>
			<circle cx="12.8798" cy="10.9484" r="0.635199" fill="#677C95" />
			<circle
				r="0.635199"
				transform="matrix(1 0 0 -1 12.8798 8.64935)"
				fill="#677C95"
			/>
			<circle
				r="0.635199"
				transform="matrix(1 0 0 -1 12.8798 6.35027)"
				fill="#677C95"
			/>
			<circle
				r="0.635199"
				transform="matrix(1 0 0 -1 7.70551 3.70184)"
				fill="#677C95"
			/>
			<circle
				r="0.635199"
				transform="matrix(1 0 0 -1 10.0844 3.70196)"
				fill="#677C95"
			/>
			<circle
				r="0.635199"
				transform="matrix(1 0 0 -1 12.4272 4.0512)"
				fill="#677C95"
			/>
			<circle
				r="0.635199"
				transform="matrix(-1 0 0 1 2.60357 11.0345)"
				fill="#677C95"
			/>
			<circle
				cx="2.60357"
				cy="8.59197"
				r="0.635199"
				transform="rotate(-180 2.60357 8.59197)"
				fill="#677C95"
			/>
			<circle
				cx="2.60357"
				cy="6.32159"
				r="0.635199"
				transform="rotate(-180 2.60357 6.32159)"
				fill="#677C95"
			/>
			<circle
				cx="5.32623"
				cy="3.70196"
				r="0.635199"
				transform="rotate(-180 5.32623 3.70196)"
				fill="#677C95"
			/>
			<circle
				cx="3.05572"
				cy="4.0512"
				r="0.635199"
				transform="rotate(-180 3.05572 4.0512)"
				fill="#677C95"
			/>
			<circle cx="12.8798" cy="13.2475" r="0.635199" fill="#677C95" />
			<circle cx="12.8798" cy="15.5466" r="0.635199" fill="#677C95" />
			<circle cx="7.70551" cy="18.195" r="0.635199" fill="#677C95" />
			<circle cx="10.0844" cy="18.1949" r="0.635199" fill="#677C95" />
			<circle cx="12.4272" cy="17.8456" r="0.635199" fill="#677C95" />
			<circle
				r="0.635199"
				transform="matrix(-1 0 0 1 2.60357 13.3049)"
				fill="#677C95"
			/>
			<circle
				r="0.635199"
				transform="matrix(-1 0 0 1 2.60357 15.5753)"
				fill="#677C95"
			/>
			<circle
				r="0.635199"
				transform="matrix(-1 0 0 1 5.32623 18.1949)"
				fill="#677C95"
			/>
			<circle
				r="0.635199"
				transform="matrix(-1 0 0 1 3.05572 17.8456)"
				fill="#677C95"
			/>
		</g>
		<defs>
			<clipPath id="clip0">
				<rect
					width="18"
					height="18"
					fill="white"
					transform="translate(0.396484 0.830078)"
				/>
			</clipPath>
		</defs>
	</svg>
);
