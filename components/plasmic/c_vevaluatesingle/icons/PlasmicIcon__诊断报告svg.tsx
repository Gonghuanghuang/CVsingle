// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type 诊断报告svgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function 诊断报告svgIcon(props: 诊断报告svgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      t={"1709714915905"}
      className={classNames("plasmic-default__svg", className, "icon")}
      viewBox={"0 0 1024 1024"}
      version={"1.1"}
      pId={"27023"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M288.23 256.36h318.04q31.26 0 31.26 31.26v.01q0 31.26-31.26 31.26H288.23q-31.26 0-31.26-31.26v-.01q0-31.26 31.26-31.26z"
        }
        fill={"currentColor"}
        pId={"27024"}
      ></path>

      <path
        d={
          "M288.23 449.38h445.41q31.26 0 31.26 31.26v.01q0 31.26-31.26 31.26H288.23q-31.26 0-31.26-31.26v-.01q0-31.26 31.26-31.26z"
        }
        fill={"currentColor"}
        pId={"27025"}
      ></path>

      <path
        d={
          "M288.23 643.55h194.56q31.26 0 31.26 31.26v.01q0 31.26-31.26 31.26H288.23q-31.26 0-31.26-31.26v-.01q0-31.26 31.26-31.26z"
        }
        fill={"currentColor"}
        pId={"27026"}
      ></path>

      <path
        d={
          "M735.9 256.36h.29q31.26 0 31.26 31.26v.01q0 31.26-31.26 31.26h-.29q-31.26 0-31.26-31.26v-.01q0-31.26 31.26-31.26z"
        }
        fill={"currentColor"}
        pId={"27027"}
      ></path>

      <path
        d={
          "M767.59 98.2H254.2a127.35 127.35 0 00-127.35 127.35v575.08A127.35 127.35 0 00254.2 928h321.49A31.35 31.35 0 00607 896.63v-1.3A31.34 31.34 0 00575.69 864H254.2a63.35 63.35 0 01-63.35-63.35v-575.1a63.35 63.35 0 0163.35-63.35h513.39a63.35 63.35 0 0163.35 63.35V832a32 32 0 01-15.78 27.57 31.77 31.77 0 00-15.91 27.28v1.49c0 23.81 25.61 39.13 46.39 27.51a96.08 96.08 0 0049.3-83.85V225.55A127.35 127.35 0 00767.59 98.2z"
        }
        fill={"currentColor"}
        pId={"27028"}
      ></path>
    </svg>
  );
}

export default 诊断报告svgIcon;
/* prettier-ignore-end */
