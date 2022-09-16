import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const MultiOutput12pxIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "12",
	width = "12",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 12 12"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			d="M5.20654 8.29167C5.40214 8.29167 5.5607 8.45023 5.5607 8.64583C5.5607 8.84143 5.40214 9 5.20654 9H2.13755C1.882 9 1.67483 8.79283 1.67483 8.53728C1.67483 8.42214 1.71775 8.31113 1.79522 8.22595L3.71346 6.11667C3.97418 5.82778 4.16279 5.56667 4.27928 5.33333C4.40132 5.09444 4.46234 4.85833 4.46234 4.625C4.46234 4.325 4.37636 4.09722 4.20439 3.94167C4.03243 3.78056 3.7828 3.7 3.45551 3.7C3.02664 3.7 2.59777 3.83213 2.1689 4.0964C1.97584 4.21536 1.71414 4.15701 1.615 3.95305C1.54672 3.8126 1.57668 3.64165 1.70342 3.55041C1.8985 3.40998 2.12751 3.29317 2.39043 3.2C2.751 3.06667 3.11435 3 3.48047 3C4.04629 3 4.49285 3.14167 4.82014 3.425C5.15298 3.70833 5.3194 4.09167 5.3194 4.575C5.3194 4.91944 5.24451 5.24722 5.09473 5.55833C4.94495 5.86389 4.69533 6.20556 4.34585 6.58333L2.76487 8.29167H5.20654Z"
			fill="#272932"
		/>
		<path
			d="M9.99074 8.36786C10.1955 8.62197 10.0146 9 9.68828 9C9.57027 9 9.45866 8.94635 9.38495 8.8542L8.26176 7.45L7.15572 8.85156C7.08174 8.9453 6.9689 9 6.84949 9C6.52133 9 6.33981 8.61949 6.5463 8.36444L7.77914 6.84167L6.64452 5.43563C6.43845 5.18025 6.62021 4.8 6.94837 4.8C7.06834 4.8 7.18166 4.85516 7.25567 4.9496L8.26176 6.23333L9.27509 4.94985C9.34981 4.85521 9.46375 4.8 9.58433 4.8C9.91548 4.8 10.0989 5.18372 9.89095 5.44143L8.76101 6.84167L9.99074 8.36786Z"
			fill="#272932"
		/>
	</svg>
);