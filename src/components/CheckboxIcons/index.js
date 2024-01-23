export const SmallDefaultIcon = ({ fill = "white", stroke = "#D3D4D8" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <rect
        cursor="pointer"
        id="small"
        x="1"
        y="1"
        width="14"
        height="14"
        rx="3"
        fill={fill}
        stroke={stroke}
        stroke-width="2"
      />
    </svg>
  );
};
export const SmallHoverIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <rect
        cursor="pointer"
        x="1"
        y="1"
        width="14"
        height="14"
        rx="3"
        fill="#F8FAFF"
        stroke="#BED0FB"
        stroke-width="2"
      />
    </svg>
  );
};
export const SmallCheckedIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <rect cursor="pointer" width="16" height="16" rx="4" fill="#0738D2" />
      <path
        d="M4.5 8.5L6.5 10.5L11.5 5.5"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const SmallPartialIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <rect cursor="pointer" width="16" height="16" rx="4" fill="#0738D2" />
      <path
        d="M11 8H5"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const SmallDisabledIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <rect
        x="1"
        y="1"
        width="14"
        height="14"
        rx="3"
        fill="#F8FAFC"
        stroke="#F1F4F8"
        stroke-width="2"
      />
    </svg>
  );
};
export const MediumDefaultIcon = ({
  fill = "white",
  stroke = "#D3D4D8",
  disabled,
}) => {
  const handleMouseEnter = () => {
    fill = "#F8FAFF";
    stroke = "#BED0FB";
  };
  const handleMouseLeave = () => {
    fill = "#white";
    stroke = "#D3D4D8";
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <rect
        id="medium"
        cursor={!disabled && "pointer"}
        x="1"
        y="1"
        width="18"
        height="18"
        rx="5"
        pointerEvents="all"
        fill={disabled ? "#F8FAFC" : fill}
        stroke={disabled ? "#F1F4F8" : stroke}
        stroke-width="2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </svg>
  );
};
export const MediumHoverIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <rect
        cursor="pointer"
        x="1"
        y="1"
        width="18"
        height="18"
        rx="5"
        fill="#F8FAFF"
        stroke="#BED0FB"
        stroke-width="2"
      />
    </svg>
  );
};
export const MediumCheckedIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <rect cursor="pointer" width="20" height="20" rx="6" fill="#0738D2" />
      <path
        d="M5.33325 10.667L7.99992 13.3337L14.6666 6.66699"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const MediumPartialIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <rect cursor="pointer" width="20" height="20" rx="6" fill="#0738D2" />
      <path
        d="M14 10H6"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const MediumDisabledIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <rect
        x="1"
        y="1"
        width="18"
        height="18"
        rx="5"
        fill="#F8FAFC"
        stroke="#F1F4F8"
        stroke-width="2"
      />
    </svg>
  );
};
export const BigDefaultIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect
        cursor="pointer"
        x="1"
        y="1"
        width="22"
        height="22"
        rx="7"
        fill="white"
        stroke="#D3D4D8"
        stroke-width="2"
      />
    </svg>
  );
};
export const BigHoverIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect
        cursor="pointer"
        x="1"
        y="1"
        width="22"
        height="22"
        rx="7"
        fill="#F8FAFF"
        stroke="#BED0FB"
        stroke-width="2"
      />
    </svg>
  );
};
export const BigCheckedIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect cursor="pointer" width="24" height="24" rx="8" fill="#0738D2" />
      <path
        d="M6.16675 12.833L9.50008 16.1663L17.8334 7.83301"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const BigPartialIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect cursor="pointer" width="24" height="24" rx="8" fill="#0738D2" />
      <path
        d="M17 12H7"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const BigDisabledIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect
        x="1"
        y="1"
        width="22"
        height="22"
        rx="7"
        fill="#F8FAFC"
        stroke="#F1F4F8"
        stroke-width="2"
      />
    </svg>
  );
};
