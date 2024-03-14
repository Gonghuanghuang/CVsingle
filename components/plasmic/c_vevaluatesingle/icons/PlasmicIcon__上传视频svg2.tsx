// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type 上传视频svg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function 上传视频svg2Icon(props: 上传视频svg2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      t={"1709719545558"}
      className={classNames("plasmic-default__svg", className, "icon")}
      viewBox={"0 0 1024 1024"}
      version={"1.1"}
      pId={"39550"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M723.21 816.73h-618.4c-19.4 0-35.18-15.51-35.18-34.58V236.28c0-19.07 15.78-34.58 35.18-34.58h728.02c19.4 0 35.18 15.51 35.18 34.58v257.3c0 17.57 14.49 31.81 32.37 31.81s32.37-14.24 32.37-31.81v-257.3c0-54.15-44.82-98.2-99.92-98.2H104.81c-55.09 0-99.92 44.05-99.92 98.2v545.88c0 54.15 44.82 98.2 99.92 98.2h618.4c17.88 0 32.37-14.24 32.37-31.81s-14.49-31.82-32.37-31.82z"
        }
        pId={"39551"}
      ></path>

      <path
        d={
          "M405.97 375.95c-15.42-9.04-34.83 2.08-34.83 19.95v242.05c0 17.87 19.41 28.99 34.83 19.95l206.42-121.02c15.24-8.94 15.24-30.97 0-39.9L405.97 375.95zm604.71 312.96l-90.54-90.54a28.626 28.626 0 00-6.96-5.13c-1.25-.66-2.54-1.22-3.86-1.68-.88-.31-1.77-.57-2.67-.79-.9-.22-1.81-.4-2.72-.53-.46-.07-.91-.12-1.37-.16-.92-.09-1.84-.13-2.76-.13a28.719 28.719 0 00-8.19 1.18 28.66 28.66 0 00-12.15 7.24l-90.54 90.54c-11.23 11.23-11.23 29.44 0 40.68s29.44 11.23 40.68 0l40.51-40.51v167.16c0 16.4 13.29 29.69 29.69 29.69s29.69-13.29 29.69-29.69V689.07L970 729.58c11.23 11.23 29.44 11.23 40.68 0 11.23-11.23 11.23-29.44 0-40.67z"
        }
        pId={"39552"}
      ></path>
    </svg>
  );
}

export default 上传视频svg2Icon;
/* prettier-ignore-end */
