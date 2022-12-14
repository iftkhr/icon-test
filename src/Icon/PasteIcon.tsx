import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const PasteIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "41",
	width = "41",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 41 41"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<g>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M18.9459 0.570503H17.4456C16.6571 0.570503 16.0179 1.20973 16.0179 1.99825C16.0179 2.78678 16.6571 3.426 17.4456 3.426H32.8229C33.6893 3.426 34.3941 4.13098 34.3941 4.99739L34.3943 31.1732C34.3943 32.0396 34.1256 32.7446 33.2593 32.7446H33.2445C32.456 32.7446 31.8167 33.3839 31.8167 34.1724C31.8167 34.961 32.456 35.6003 33.2445 35.6003H33.2593C35.7004 35.6003 37.2497 33.6142 37.2497 31.1732V30.6299L37.2499 27.7742V4.99739C37.2499 2.55635 35.2639 0.570312 32.8231 0.570312H21.8016L18.9459 0.570503ZM25.0983 34.1724C25.0983 33.3839 24.459 32.7446 23.6704 32.7446H16.0179C15.1515 32.7446 14.4465 32.0396 14.4465 31.1732V11.5668C14.4465 10.7782 13.8072 10.1389 13.0187 10.1389C12.2301 10.1389 11.5908 10.7782 11.5908 11.5668V31.1732C11.5908 33.6142 13.5769 35.6003 16.0179 35.6003H23.6704C24.459 35.6003 25.0983 34.961 25.0983 34.1724Z"
				fill="#677C95"
			/>
			<circle cx="28.4838" cy="23.0551" r="1.41155" fill="#677C95" />
			<circle
				r="1.41155"
				transform="matrix(1 0 0 -1 28.4838 17.9459)"
				fill="#677C95"
			/>
			<circle
				r="1.41155"
				transform="matrix(1 0 0 -1 28.4838 12.8375)"
				fill="#677C95"
			/>
			<circle
				r="1.41155"
				transform="matrix(1 0 0 -1 16.9853 6.95173)"
				fill="#677C95"
			/>
			<ellipse
				rx="1.41155"
				ry="1.41155"
				transform="matrix(1 0 0 -1 22.2724 6.95173)"
				fill="#677C95"
			/>
			<ellipse
				rx="1.41155"
				ry="1.41155"
				transform="matrix(1 0 0 -1 27.4784 7.7281)"
				fill="#677C95"
			/>
			<ellipse
				rx="1.41155"
				ry="1.41155"
				transform="matrix(-1 0 0 1 5.64802 23.2465)"
				fill="#677C95"
			/>
			<ellipse
				cx="5.64802"
				cy="17.8179"
				rx="1.41155"
				ry="1.41155"
				transform="rotate(-180 5.64802 17.8179)"
				fill="#677C95"
			/>
			<ellipse
				cx="5.64802"
				cy="12.774"
				rx="1.41155"
				ry="1.41155"
				transform="rotate(-180 5.64802 12.774)"
				fill="#677C95"
			/>
			<ellipse
				cx="11.6983"
				cy="6.95173"
				rx="1.41155"
				ry="1.41155"
				transform="rotate(-180 11.6983 6.95173)"
				fill="#677C95"
			/>
			<circle
				cx="6.6529"
				cy="7.7281"
				r="1.41155"
				transform="rotate(-180 6.6529 7.7281)"
				fill="#677C95"
			/>
			<circle cx="28.4838" cy="28.1645" r="1.41155" fill="#677C95" />
			<circle cx="28.4838" cy="33.2729" r="1.41155" fill="#677C95" />
			<ellipse
				cx="16.9853"
				cy="39.1586"
				rx="1.41155"
				ry="1.41155"
				fill="#677C95"
			/>
			<ellipse
				cx="22.2724"
				cy="39.1586"
				rx="1.41155"
				ry="1.41155"
				fill="#677C95"
			/>
			<ellipse
				cx="27.4784"
				cy="38.3823"
				rx="1.41155"
				ry="1.41155"
				fill="#677C95"
			/>
			<ellipse
				rx="1.41155"
				ry="1.41155"
				transform="matrix(-1 0 0 1 5.64802 28.2924)"
				fill="#677C95"
			/>
			<ellipse
				rx="1.41155"
				ry="1.41155"
				transform="matrix(-1 0 0 1 5.64802 33.3364)"
				fill="#677C95"
			/>
			<ellipse
				rx="1.41155"
				ry="1.41155"
				transform="matrix(-1 0 0 1 11.6983 39.1586)"
				fill="#677C95"
			/>
			<ellipse
				rx="1.41155"
				ry="1.41155"
				transform="matrix(-1 0 0 1 6.6529 38.3823)"
				fill="#677C95"
			/>
		</g>
		<defs>
			<clipPath id="clip0">
				<rect
					width="40"
					height="40"
					fill="white"
					transform="translate(0.743164 0.570312)"
				/>
			</clipPath>
		</defs>
	</svg>
);
