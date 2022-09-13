import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const VariableIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "16",
	width = "16",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 16 16"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			d="M3.33334 11.25C2.91913 11.25 2.58334 11.5858 2.58334 12C2.58334 12.4142 2.91913 12.75 3.33334 12.75V11.25ZM12.6667 12.75C13.0809 12.75 13.4167 12.4142 13.4167 12C13.4167 11.5858 13.0809 11.25 12.6667 11.25V12.75ZM3.33334 12.75H12.6667V11.25H3.33334V12.75Z"
			fill="#272932"
		/>
		<path
			d="M3.33334 7.91663C2.91913 7.91663 2.58334 8.25241 2.58334 8.66663C2.58334 9.08084 2.91913 9.41663 3.33334 9.41663V7.91663ZM12.6667 9.41663C13.0809 9.41663 13.4167 9.08084 13.4167 8.66663C13.4167 8.25241 13.0809 7.91663 12.6667 7.91663V9.41663ZM3.72223 9.41663C4.13645 9.41663 4.47223 9.08084 4.47223 8.66663C4.47223 8.25241 4.13645 7.91663 3.72223 7.91663V9.41663ZM7.61112 7.91663C7.19691 7.91663 6.86112 8.25241 6.86112 8.66663C6.86112 9.08084 7.19691 9.41663 7.61112 9.41663V7.91663ZM8.3889 9.41663C8.80311 9.41663 9.1389 9.08084 9.1389 8.66663C9.1389 8.25241 8.80311 7.91663 8.3889 7.91663V9.41663ZM12.2778 7.91663C11.8636 7.91663 11.5278 8.25241 11.5278 8.66663C11.5278 9.08084 11.8636 9.41663 12.2778 9.41663V7.91663ZM3.33334 9.41663H3.72223V7.91663H3.33334V9.41663ZM7.61112 9.41663H8.3889V7.91663H7.61112V9.41663ZM12.2778 9.41663H12.6667V7.91663H12.2778V9.41663Z"
			fill="#272932"
		/>
		<path
			d="M2.62511 4.39491C2.48881 4.00377 2.6954 3.57618 3.08654 3.43988C3.47768 3.30357 3.90527 3.51016 4.04157 3.9013L2.62511 4.39491ZM13.382 3.92253C13.5065 4.31757 13.2873 4.7388 12.8922 4.86338C12.4972 4.98796 12.076 4.76871 11.9514 4.37368L13.382 3.92253ZM10.3333 2.33329L10.3333 1.58329L10.3333 2.33329ZM3.33334 4.14811C4.04157 3.9013 4.04145 3.90094 4.04132 3.90059C4.04128 3.90048 4.04116 3.90013 4.04108 3.8999C4.04093 3.89946 4.04078 3.89904 4.04064 3.89863C4.04035 3.89783 4.0401 3.89711 4.03987 3.89648C4.03941 3.89521 4.03907 3.89427 4.03885 3.89367C4.03841 3.89245 4.03842 3.89253 4.03892 3.89382C4.03992 3.8964 4.04282 3.90373 4.04777 3.91514C4.05771 3.93809 4.07556 3.97668 4.10235 4.02571C4.15658 4.12494 4.24336 4.25941 4.36923 4.39295C4.60959 4.64796 5.00409 4.91663 5.66668 4.91663L5.66668 6.41663C4.5251 6.41663 3.75294 5.92603 3.27767 5.42178C3.04573 5.1757 2.88746 4.93054 2.78608 4.74504C2.73508 4.65171 2.69748 4.57166 2.67144 4.51157C2.65839 4.48146 2.64816 4.45617 2.64053 4.43651C2.63672 4.42667 2.63354 4.41822 2.63098 4.41126C2.6297 4.40778 2.62858 4.40467 2.6276 4.40194C2.62711 4.40058 2.62666 4.39931 2.62625 4.39813C2.62604 4.39755 2.62584 4.39699 2.62565 4.39645C2.62556 4.39618 2.62542 4.3958 2.62538 4.39566C2.62524 4.39528 2.62511 4.39491 3.33334 4.14811ZM5.66668 4.91663C5.86835 4.91663 6.09279 4.82822 6.38858 4.57553C6.69445 4.31425 6.98876 3.95587 7.34928 3.52117C7.68771 3.11312 8.08591 2.63654 8.54538 2.26866C9.01716 1.89092 9.60693 1.58329 10.3333 1.58329L10.3333 3.08329C10.0598 3.08329 9.79171 3.19233 9.4829 3.43959C9.16176 3.69671 8.85658 4.05347 8.50386 4.47875C8.17324 4.87739 7.78864 5.35233 7.36286 5.71605C6.92702 6.08837 6.36708 6.41663 5.66668 6.41663L5.66668 4.91663ZM10.3333 1.58329C11.5099 1.58329 12.2894 2.20171 12.7459 2.77199C12.9722 3.05475 13.1276 3.33398 13.2266 3.5416C13.2766 3.64631 13.3134 3.73531 13.3386 3.80086C13.3513 3.8337 13.3611 3.86087 13.3682 3.88141C13.3718 3.89169 13.3747 3.90033 13.377 3.90722C13.3781 3.91066 13.3791 3.91367 13.3799 3.91623C13.3803 3.9175 13.3807 3.91867 13.3811 3.91972C13.3812 3.92025 13.3814 3.92075 13.3815 3.92121C13.3816 3.92145 13.3817 3.92178 13.3817 3.9219C13.3819 3.92222 13.382 3.92253 12.6667 4.14811C11.9514 4.37368 11.9515 4.37398 11.9516 4.37427C11.9516 4.37436 11.9517 4.37465 11.9518 4.37483C11.9519 4.37519 11.952 4.37552 11.9521 4.37583C11.9523 4.37644 11.9524 4.37695 11.9526 4.37736C11.9528 4.37817 11.953 4.37857 11.953 4.37858C11.953 4.3786 11.9525 4.37706 11.9514 4.37404C11.9493 4.368 11.9451 4.35618 11.9387 4.3394C11.9257 4.3057 11.904 4.25291 11.8728 4.18749C11.8095 4.05482 11.7117 3.88036 11.5749 3.70941C11.305 3.37228 10.9178 3.08329 10.3333 3.08329L10.3333 1.58329Z"
			fill="#272932"
		/>
	</svg>
);
