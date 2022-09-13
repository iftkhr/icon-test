import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const SearchDataIcon: React.FC<Props> = ({
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
			d="M6.40189 10.177C5.22929 10.177 3.84067 9.85756 2.73978 9.52329C2.06294 9.31778 1.34521 9.8093 1.34521 10.5166V15.8795C1.34521 16.1722 1.47141 16.4529 1.70351 16.6313C2.92432 17.5695 4.3723 18.1554 6.40189 18.1554C8.42788 18.1554 9.73501 17.6997 10.7005 16.8296C10.89 16.6588 10.9844 16.4096 10.9844 16.1545V10.3954C10.9844 9.72215 10.3396 9.26149 9.7042 9.48394C8.73574 9.823 7.59125 10.177 6.40189 10.177Z"
			fill="#87DDB4"
		/>
		<path
			d="M14.2193 10.9932C14.2193 11.7376 12.771 12.341 10.9844 12.341C9.19782 12.341 7.74951 11.7376 7.74951 10.9932"
			stroke="#272932"
			stroke-width="1.2"
		/>
		<path
			d="M7.74951 8.5083L7.74951 13.4774C7.74951 14.2218 9.19782 14.8253 10.9844 14.8253C12.771 14.8253 14.2193 14.2218 14.2193 13.4774V8.5083"
			stroke="#272932"
			stroke-width="1.2"
		/>
		<circle
			cx="10.9844"
			cy="10.9844"
			r="7.98438"
			stroke="#272932"
			stroke-width="1.5"
		/>
		<path
			d="M16.1793 17.0532L19.0001 20"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<ellipse
			cx="10.9844"
			cy="8.55166"
			rx="3.23488"
			ry="1.40811"
			stroke="#272932"
			stroke-width="1.2"
			stroke-linecap="round"
		/>
	</svg>
);
