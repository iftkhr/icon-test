import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const DataInputIcon: React.FC<Props> = ({
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
		<g opacity="0.9">
			<path
				d="M10.6148 6.16304C10.2939 6.14695 10.3334 6.16303 10 6.16303C6.13401 6.16303 3 7.28231 3 8.66303C3 10.0437 6.13401 11.163 10 11.163C11.484 11.163 12.4746 11.1348 13.5609 10.872"
				stroke="white"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M17 19.6631C17 21.0438 13.866 22.1631 10 22.1631C6.13401 22.1631 3 21.0438 3 19.6631"
				stroke="white"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M17 13.9131C17 15.2938 13.866 16.4131 10 16.4131C6.13401 16.4131 3 15.2938 3 13.9131"
				stroke="white"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<mask id="path-4-inside-1_14170_499" fill="white">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M17.773 11.5181C18.1613 11.8965 18.7803 11.8965 19.1686 11.5181L23.6374 7.16428C24.2801 6.53819 23.8368 5.44802 22.9396 5.44802L21.0755 5.44802L21.0755 1.19801C21.0755 0.645728 20.6278 0.198014 20.0755 0.198014L16.866 0.198014C16.3137 0.198014 15.866 0.645729 15.866 1.19801L15.866 5.44802L14.002 5.44803C13.1048 5.44803 12.6615 6.53819 13.3042 7.16428L17.773 11.5181Z"
				/>
			</mask>
			<path
				d="M19.1686 11.5181L18.1219 10.4438L18.1219 10.4438L19.1686 11.5181ZM17.773 11.5181L18.8197 10.4438L18.8197 10.4438L17.773 11.5181ZM23.6374 7.16428L24.6842 8.23867L24.6842 8.23867L23.6374 7.16428ZM21.0755 5.44802L19.5755 5.44802L19.5755 6.94802L21.0755 6.94802L21.0755 5.44802ZM20.0755 0.198014L20.0755 -1.30199L20.0755 0.198014ZM16.866 0.198014L16.866 1.69801L16.866 0.198014ZM15.866 1.19801L17.366 1.19801L15.866 1.19801ZM15.866 5.44802L15.866 6.94802L17.366 6.94802L17.366 5.44802L15.866 5.44802ZM13.3042 7.16428L12.2574 8.23867L12.2574 8.23867L13.3042 7.16428ZM18.1219 10.4438C18.316 10.2546 18.6256 10.2546 18.8197 10.4438L16.7262 12.5925C17.697 13.5383 19.2446 13.5383 20.2154 12.5925L18.1219 10.4438ZM22.5907 6.0899L18.1219 10.4438L20.2154 12.5925L24.6842 8.23867L22.5907 6.0899ZM22.9396 6.94802C22.491 6.94802 22.2694 6.40294 22.5907 6.0899L24.6842 8.23867C26.2908 6.67343 25.1826 3.94802 22.9396 3.94802L22.9396 6.94802ZM21.0755 6.94802L22.9396 6.94802L22.9396 3.94802L21.0755 3.94802L21.0755 6.94802ZM19.5755 1.19801L19.5755 5.44802L22.5755 5.44802L22.5755 1.19801L19.5755 1.19801ZM20.0755 1.69801C19.7994 1.69801 19.5755 1.47416 19.5755 1.19801L22.5755 1.19801C22.5755 -0.1827 21.4562 -1.30199 20.0755 -1.30199L20.0755 1.69801ZM16.866 1.69801L20.0755 1.69801L20.0755 -1.30199L16.866 -1.30199L16.866 1.69801ZM17.366 1.19801C17.366 1.47416 17.1421 1.69801 16.866 1.69801L16.866 -1.30199C15.4853 -1.30199 14.366 -0.1827 14.366 1.19801L17.366 1.19801ZM17.366 5.44802L17.366 1.19801L14.366 1.19801L14.366 5.44803L17.366 5.44802ZM14.002 6.94803L15.866 6.94802L15.866 3.94802L14.002 3.94803L14.002 6.94803ZM14.3509 6.0899C14.6722 6.40294 14.4506 6.94803 14.002 6.94803L14.002 3.94803C11.759 3.94803 10.6509 6.67343 12.2574 8.23867L14.3509 6.0899ZM18.8197 10.4438L14.3509 6.0899L12.2574 8.23867L16.7262 12.5925L18.8197 10.4438Z"
				fill="white"
				mask="url(#path-4-inside-1_14170_499)"
			/>
			<path
				d="M3 8.66309V19.6631"
				stroke="white"
				stroke-width="1.5"
				stroke-linecap="round"
			/>
			<path
				d="M17 14.0641V19.6631"
				stroke="white"
				stroke-width="1.5"
				stroke-linecap="round"
			/>
		</g>
	</svg>
);
