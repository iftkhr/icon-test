import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const AndIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "20",
	width = "24",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 24 20"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<rect
			x="0.5"
			y="0.5"
			width="23"
			height="19"
			rx="2.5"
			stroke="#1D6295"
		/>
		<path
			d="M15.6211 14.108C14.9331 13.868 14.3411 13.524 13.8451 13.076C13.1011 13.756 12.2451 14.096 11.2771 14.096C10.7011 14.096 10.1891 14 9.74114 13.808C9.30114 13.608 8.95714 13.332 8.70914 12.98C8.46914 12.628 8.34914 12.224 8.34914 11.768C8.34914 11.248 8.49314 10.788 8.78114 10.388C9.06914 9.988 9.52914 9.612 10.1611 9.26C9.84114 8.908 9.60914 8.584 9.46514 8.288C9.32114 7.992 9.24914 7.688 9.24914 7.376C9.24914 6.776 9.46514 6.292 9.89714 5.924C10.3291 5.556 10.8931 5.372 11.5891 5.372C12.2291 5.372 12.7411 5.54 13.1251 5.876C13.5091 6.212 13.7011 6.66 13.7011 7.22C13.7011 7.652 13.5731 8.044 13.3171 8.396C13.0691 8.748 12.6571 9.092 12.0811 9.428L13.7731 11.18C14.1091 10.5 14.2931 9.728 14.3251 8.864H15.5971C15.5411 10.112 15.2291 11.188 14.6611 12.092C15.1331 12.532 15.7011 12.86 16.3651 13.076L15.6211 14.108ZM11.6011 6.404C11.3051 6.404 11.0651 6.492 10.8811 6.668C10.7051 6.844 10.6171 7.08 10.6171 7.376C10.6171 7.56 10.6651 7.74 10.7611 7.916C10.8651 8.092 11.0531 8.332 11.3251 8.636C11.7491 8.388 12.0451 8.164 12.2131 7.964C12.3891 7.756 12.4771 7.528 12.4771 7.28C12.4771 7.016 12.3971 6.804 12.2371 6.644C12.0771 6.484 11.8651 6.404 11.6011 6.404ZM9.81314 11.684C9.81314 12.068 9.94914 12.372 10.2211 12.596C10.4931 12.82 10.8611 12.932 11.3251 12.932C11.9491 12.932 12.5131 12.7 13.0171 12.236L10.9171 10.064C10.5331 10.304 10.2531 10.552 10.0771 10.808C9.90114 11.064 9.81314 11.356 9.81314 11.684Z"
			fill="#1D6295"
		/>
	</svg>
);