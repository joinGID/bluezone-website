"use client";

const OutlineButton = ({ label, className = "",onClick, ...props }) => {
  //label : is button name
  //className : is button class name means style
  //props : is button props
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center
                  border border-slate-400
                  bg-transparent
                  px-8 py-2.5
                  text-sm sm:text-base
                  font-medium
                  text-[#263840]
                  hover:bg-black hover:text-white
                  ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default OutlineButton;