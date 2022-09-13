import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const RulesGreenIcon: React.FC<Props> = ({
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
			d="M22.1406 11.1406H8.39062C7.91599 11.1406 7.53125 11.5254 7.53125 12C7.53125 12.4746 7.91599 12.8594 8.39062 12.8594H22.1406C22.6153 12.8594 23 12.4746 23 12C23 11.5254 22.6153 11.1406 22.1406 11.1406Z"
			fill="#35B687"
		/>
		<path
			d="M22.1406 4.69531H8.39062C7.91599 4.69531 7.53125 5.08005 7.53125 5.55469C7.53125 6.02932 7.91599 6.41406 8.39062 6.41406H22.1406C22.6153 6.41406 23 6.02932 23 5.55469C23 5.08005 22.6153 4.69531 22.1406 4.69531Z"
			fill="#35B687"
		/>
		<path
			d="M22.1406 17.5859H8.39062C7.91599 17.5859 7.53125 17.9707 7.53125 18.4453C7.53125 18.9199 7.91599 19.3047 8.39062 19.3047H22.1406C22.6153 19.3047 23 18.9199 23 18.4453C23 17.9707 22.6153 17.5859 22.1406 17.5859Z"
			fill="#35B687"
		/>
		<path
			d="M1.25177 6.24051C0.916077 5.90498 0.916077 5.36082 1.25177 5.02513C1.5873 4.68961 2.13145 4.68961 2.46698 5.02513L3.02339 5.58154L4.86115 3.74396C5.19667 3.40826 5.74083 3.40826 6.07635 3.74396C6.41205 4.07965 6.41205 4.62364 6.07635 4.95934L3.63116 7.40453C3.29547 7.74022 2.75131 7.74005 2.41579 7.40453L1.25177 6.24051Z"
			fill="#35B687"
		/>
		<path
			d="M4.86719 9.63672H1.85938C1.3847 9.63672 1 10.0214 1 10.4961V13.5039C1 13.9786 1.3847 14.3633 1.85938 14.3633H4.86719C5.34186 14.3633 5.72656 13.9786 5.72656 13.5039V10.4961C5.72656 10.0214 5.34186 9.63672 4.86719 9.63672ZM4.00781 12.6445H2.71875V11.3555H4.00781V12.6445Z"
			fill="#35B687"
		/>
		<path
			d="M4.86719 16.082H1.85938C1.3847 16.082 1 16.4667 1 16.9414V19.9492C1 20.4239 1.3847 20.8086 1.85938 20.8086H4.86719C5.34186 20.8086 5.72656 20.4239 5.72656 19.9492V16.9414C5.72656 16.4667 5.34186 16.082 4.86719 16.082ZM4.00781 19.0898H2.71875V17.8008H4.00781V19.0898Z"
			fill="#35B687"
		/>
	</svg>
);
