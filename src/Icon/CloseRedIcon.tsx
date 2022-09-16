import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const CloseRedIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "16",
	width = "16",
}) => (
	<svg
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		preserveAspectRatio="xMidYMid meet"
		viewBox="0 0 16 16"
		width={width}
		height={height}
		fill={fill}
		stroke={stroke}
	>
		<title>{tooltip}</title>
		<defs>
			<path d="M11.06 10.83L5.41 5.17" id="dpYuSiKQh"></path>
			<path d="M5.41 10.83L11.06 5.17" id="e1ghzTQEKb"></path>
		</defs>
		<g>
			<g>
				<g>
					<use
						xlinkHref="#dpYuSiKQh"
						opacity="1"
						fill="#000000"
						fill-opacity="0"
					></use>
					<g>
						<use
							xlinkHref="#dpYuSiKQh"
							opacity="1"
							fill-opacity="0"
							stroke="#ee3e54"
							stroke-width="1.3"
							stroke-opacity="1"
						></use>
					</g>
				</g>
				<g>
					<use
						xlinkHref="#e1ghzTQEKb"
						opacity="1"
						fill="#000000"
						fill-opacity="0"
					></use>
					<g>
						<use
							xlinkHref="#e1ghzTQEKb"
							opacity="1"
							fill-opacity="0"
							stroke="#ee3e54"
							stroke-width="1.3"
							stroke-opacity="1"
						></use>
					</g>
				</g>
			</g>
		</g>
	</svg>
);
