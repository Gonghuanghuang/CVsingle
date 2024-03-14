// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WechatsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WechatsvgIcon(props: WechatsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={
        "\u00e7\u00bb\u0084\u00e4\u00bb\u00b6 297 \u00e2\u0080\u0093 15"
      }
      viewBox={"0 0 100 33"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g
        data-name={"\u00e7\u009f\u00a9\u00e5\u00bd\u00a2 3114"}
        fill={"none"}
        stroke={"#e6e6e6"}
        strokeWidth={"1"}
      >
        <rect width={"100"} height={"33"} rx={"15"} stroke={"none"}></rect>

        <rect
          x={".5"}
          y={".5"}
          width={"99"}
          height={"32"}
          rx={"14.5"}
          fill={"none"}
        ></rect>
      </g>

      <g
        data-name={"\u00e6\u00a4\u00ad\u00e5\u009c\u0086 14"}
        transform={"translate(21 14)"}
        fill={"#fff"}
        stroke={"#fff"}
        strokeWidth={"1"}
      >
        <circle cx={"3"} cy={"3"} r={"3"} stroke={"none"}></circle>

        <circle cx={"3"} cy={"3"} r={"2.5"} fill={"none"}></circle>
      </g>

      <g
        data-name={"\u00e6\u00a4\u00ad\u00e5\u009c\u0086 18"}
        transform={"translate(72 14)"}
        fill={"#fff"}
        stroke={"#fff"}
        strokeWidth={"1"}
      >
        <circle cx={"3"} cy={"3"} r={"3"} stroke={"none"}></circle>

        <circle cx={"3"} cy={"3"} r={"2.5"} fill={"none"}></circle>
      </g>

      <g
        data-name={"\u00e6\u00a4\u00ad\u00e5\u009c\u0086 15"}
        transform={"translate(14 15)"}
        fill={"#fff"}
        stroke={"#fff"}
        strokeWidth={"1"}
      >
        <circle cx={"2"} cy={"2"} r={"2"} stroke={"none"}></circle>

        <circle cx={"2"} cy={"2"} r={"1.5"} fill={"none"}></circle>
      </g>

      <g
        data-name={"\u00e6\u00a4\u00ad\u00e5\u009c\u0086 16"}
        transform={"translate(30 15)"}
        fill={"#fff"}
        stroke={"#fff"}
        strokeWidth={"1"}
      >
        <circle cx={"2"} cy={"2"} r={"2"} stroke={"none"}></circle>

        <circle cx={"2"} cy={"2"} r={"1.5"} fill={"none"}></circle>
      </g>

      <g
        data-name={"\u00e6\u00a4\u00ad\u00e5\u009c\u0086 17"}
        transform={"translate(66 8)"}
        fill={"none"}
        stroke={"#fff"}
        strokeWidth={"1"}
      >
        <circle cx={"9"} cy={"9"} r={"9"} stroke={"none"}></circle>

        <circle cx={"9"} cy={"9"} r={"8.5"} fill={"none"}></circle>
      </g>

      <path
        data-name={"\u00e7\u009b\u00b4\u00e7\u00ba\u00bf 5"}
        fill={"none"}
        stroke={"#e6e6e6"}
        strokeWidth={"1"}
        d={"M49.5 7.5v18"}
      ></path>
    </svg>
  );
}

export default WechatsvgIcon;
/* prettier-ignore-end */
