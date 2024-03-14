// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type 站立人画板1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function 站立人画板1SvgIcon(props: 站立人画板1SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 165.1 226.2"}
      xmlSpace={"preserve"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"none"} d={"M0 0h165.1v226.2H0z"}></path>

      <circle cx={"83.2"} cy={"34.4"} r={"16"}></circle>

      <path
        d={
          "M66 55.5c14.4-.2 19.4-.4 32.5 0 4.8.1 4.1 26.1 4.1 26.1-.1 41.9.2 83.8-.1 125.6-.2 7.2-9.3 11.1-14.8 6.9-2.7-2.1-2.6-5.7-2.7-8.7 0-23.9.1-47.9 0-71.8h-2.8c-.2 25.1.2 50.2-.2 75.3-1.5 9.9-18.9 8.7-18.1-1.7-.6-43.4.6-86.9-.6-130.3 0-5.1-.9-20.3 2.7-21.4z"
        }
      ></path>

      <path
        d={
          "M81.5 61.7c.1-3.7 3.2-6.7 7-6.6l68.2.2c3.7.1 6.7 3.2 6.6 7-.1 3.7-3.2 6.7-7 6.6l-68.2-.2c-3.8-.1-6.7-3.3-6.6-7z"
        }
      ></path>

      <path
        d={
          "M1.7 61.2c.1-3.7 3.3-6.7 7-6.5l68.2.5c3.7.1 6.7 3.3 6.5 7-.1 3.7-3.3 6.7-7 6.5l-68.1-.5c-3.8-.1-6.7-3.2-6.6-7z"
        }
      ></path>
    </svg>
  );
}

export default 站立人画板1SvgIcon;
/* prettier-ignore-end */
