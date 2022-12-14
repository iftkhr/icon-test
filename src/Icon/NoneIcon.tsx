import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const NoneIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "18",
	width = "19",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 19 18"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<g opacity="0.8">
			<ellipse
				cx="9.10074"
				cy="17.2991"
				rx="0.700354"
				ry="0.700355"
				fill="#677C95"
			/>
			<ellipse
				cx="9.10091"
				cy="0.700872"
				rx="0.700355"
				ry="0.700354"
				transform="rotate(180 9.10091 0.700872)"
				fill="#677C95"
			/>
			<circle cx="1.26285" cy="16.8919" r="0.700354" fill="#677C95" />
			<circle
				cx="16.9393"
				cy="1.11019"
				r="0.700354"
				transform="rotate(-180 16.9393 1.11019)"
				fill="#677C95"
			/>
			<ellipse
				cx="3.87516"
				cy="17.2991"
				rx="0.700355"
				ry="0.700354"
				fill="#677C95"
			/>
			<ellipse
				cx="14.3265"
				cy="0.700872"
				rx="0.700354"
				ry="0.700354"
				transform="rotate(180 14.3265 0.700872)"
				fill="#677C95"
			/>
			<ellipse
				cx="6.48795"
				cy="17.2991"
				rx="0.700354"
				ry="0.700355"
				fill="#677C95"
			/>
			<ellipse
				cx="11.7137"
				cy="0.700872"
				rx="0.700354"
				ry="0.700354"
				transform="rotate(180 11.7137 0.700872)"
				fill="#677C95"
			/>
			<ellipse
				rx="0.700354"
				ry="0.700355"
				transform="matrix(-1 0 0 1 16.9393 16.8898)"
				fill="#677C95"
			/>
			<ellipse
				rx="0.700355"
				ry="0.700354"
				transform="matrix(1 0 0 -1 1.26237 1.11019)"
				fill="#677C95"
			/>
			<ellipse
				rx="0.700354"
				ry="0.700355"
				transform="matrix(-1 0 0 1 14.3265 17.2991)"
				fill="#677C95"
			/>
			<ellipse
				rx="0.700355"
				ry="0.700354"
				transform="matrix(1 0 0 -1 3.87516 0.700872)"
				fill="#677C95"
			/>
			<ellipse
				rx="0.700355"
				ry="0.700354"
				transform="matrix(1 0 0 -1 0.841468 3.74063)"
				fill="#677C95"
			/>
			<ellipse
				rx="0.700354"
				ry="0.700354"
				transform="matrix(1 0 0 -1 17.3605 3.73965)"
				fill="#677C95"
			/>
			<ellipse
				rx="0.700355"
				ry="0.700354"
				transform="matrix(1 0 0 -1 0.841468 6.37107)"
				fill="#677C95"
			/>
			<ellipse
				rx="0.700354"
				ry="0.700354"
				transform="matrix(1 0 0 -1 17.3605 6.37009)"
				fill="#677C95"
			/>
			<ellipse
				rx="0.700355"
				ry="0.700354"
				transform="matrix(1 0 0 -1 0.841468 9.00152)"
				fill="#677C95"
			/>
			<ellipse
				rx="0.700354"
				ry="0.700354"
				transform="matrix(1 0 0 -1 17.3605 9.00053)"
				fill="#677C95"
			/>
			<ellipse
				rx="0.700355"
				ry="0.700354"
				transform="matrix(1 0 0 -1 0.841468 11.632)"
				fill="#677C95"
			/>
			<ellipse
				rx="0.700354"
				ry="0.700355"
				transform="matrix(1 0 0 -1 17.3605 11.631)"
				fill="#677C95"
			/>
			<ellipse
				rx="0.700354"
				ry="0.700354"
				transform="matrix(1 0 0 -1 0.841467 14.2624)"
				fill="#677C95"
			/>
			<ellipse
				rx="0.700354"
				ry="0.700354"
				transform="matrix(1 0 0 -1 17.3605 14.2614)"
				fill="#677C95"
			/>
			<ellipse
				rx="0.700354"
				ry="0.700355"
				transform="matrix(-1 0 0 1 11.7142 17.2991)"
				fill="#677C95"
			/>
			<ellipse
				rx="0.700354"
				ry="0.700354"
				transform="matrix(1 0 0 -1 6.48795 0.700872)"
				fill="#677C95"
			/>
		</g>
		<defs>
			<clipPath id="clip0">
				<rect
					width="18"
					height="18"
					fill="white"
					transform="translate(18.1411) rotate(90)"
				/>
			</clipPath>
		</defs>
	</svg>
);
