// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StatusBarsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StatusBarsvgIcon(props: StatusBarsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Status Bar"}
      viewBox={"0 0 340 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g data-name={"Status Bar"} fill={"currentColor"}>
        <g transform={"translate(315.672 3.333)"}>
          <g
            stroke={"currentColor"}
            strokeMiterlimit={"10"}
            strokeWidth={"1"}
            opacity={".35"}
          >
            <rect
              width={"22"}
              height={"11.333"}
              rx={"2.667"}
              stroke={"none"}
            ></rect>

            <rect
              x={".5"}
              y={".5"}
              width={"21"}
              height={"10.333"}
              rx={"2.167"}
              fill={"none"}
            ></rect>
          </g>

          <path
            d={"M23 3.667v4a2.17 2.17 0 001.328-2 2.17 2.17 0 00-1.328-2"}
            opacity={".4"}
          ></path>

          <rect
            width={"18"}
            height={"7.333"}
            rx={"1.333"}
            transform={"translate(2 2)"}
          ></rect>
        </g>

        <path
          d={
            "M303.006 14.331a.314.314 0 01-.222-.093l-2.006-2.022a.31.31 0 01-.094-.231.316.316 0 01.1-.227 3.437 3.437 0 014.437 0 .315.315 0 01.009.458l-2.002 2.022a.314.314 0 01-.222.093zm3.523-3.549a.313.313 0 01-.215-.086 4.928 4.928 0 00-6.612 0 .313.313 0 01-.215.086.308.308 0 01-.22-.091l-1.16-1.171a.322.322 0 010-.46 7.192 7.192 0 019.791 0 .323.323 0 01.1.23.319.319 0 01-.095.23l-1.155 1.171a.309.309 0 01-.219.091zm2.669-2.693a.3.3 0 01-.215-.088 8.68 8.68 0 00-11.955 0 .307.307 0 01-.435 0l-1.16-1.17a.323.323 0 010-.457 10.948 10.948 0 0115.141 0 .323.323 0 010 .457l-1.161 1.17a.306.306 0 01-.215.088z"
          }
        ></path>

        <path
          data-name={"Cellular Connection"}
          d={
            "M289.339 14.334h-1a1 1 0 01-1-1V4.667a1 1 0 011-1h1a1 1 0 011 1v8.667a1 1 0 01-1 1zm-4.667 0h-1a1 1 0 01-1-1V7.001a1 1 0 011-1h1a1 1 0 011 1v6.333a1 1 0 01-.999 1zm-4.667 0h-1a1 1 0 01-1-1v-4a1 1 0 011-1h1a1 1 0 011 1v4a1 1 0 01-1 1zm-4.666 0h-1a1 1 0 01-1-1v-2a1 1 0 011-1h1a1 1 0 011 1v2a1 1 0 01-1 1z"
          }
        ></path>

        <text
          fontSize={"15"}
          fontFamily={"SFProText-Semibold, SF Pro Text"}
          fontWeight={"600"}
          letterSpacing={"-.02em"}
          data-name={"Time Style"}
        >
          <tspan x={"11.337"} y={"14"}>
            9:41
          </tspan>
        </text>
      </g>
    </svg>
  );
}

export default StatusBarsvgIcon;
/* prettier-ignore-end */
