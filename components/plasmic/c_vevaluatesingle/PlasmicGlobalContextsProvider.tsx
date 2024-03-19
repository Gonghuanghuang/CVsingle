// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rXnSEQkb737qyHw1C9ru8K

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { AntdConfigProvider } from "@plasmicpkgs/antd5/skinny/registerConfigProvider";
import { StrapiCredentialsProvider } from "@plasmicpkgs/plasmic-strapi";
import { SanityCredentialsProvider } from "@plasmicpkgs/plasmic-sanity-io";
import { CmsCredentialsProvider } from "@plasmicpkgs/plasmic-cms";
import { CommerceProviderComponent } from "@plasmicpkgs/commerce-shopify";
import { GlobalContext } from "@/src/components/GlobalContext"; // plasmic-import: -0pK49CueiCS/codeComponent

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  antdConfigProviderProps?: Partial<
    Omit<React.ComponentProps<typeof AntdConfigProvider>, "children">
  >;
  strapiCredentialsProviderProps?: Partial<
    Omit<React.ComponentProps<typeof StrapiCredentialsProvider>, "children">
  >;
  sanityCredentialsProviderProps?: Partial<
    Omit<React.ComponentProps<typeof SanityCredentialsProvider>, "children">
  >;
  cmsCredentialsProviderProps?: Partial<
    Omit<React.ComponentProps<typeof CmsCredentialsProvider>, "children">
  >;
  commerceProviderComponentProps?: Partial<
    Omit<React.ComponentProps<typeof CommerceProviderComponent>, "children">
  >;
  globalContextProps?: Partial<
    Omit<React.ComponentProps<typeof GlobalContext>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const {
    children,
    antdConfigProviderProps,
    strapiCredentialsProviderProps,
    sanityCredentialsProviderProps,
    cmsCredentialsProviderProps,
    commerceProviderComponentProps,
    globalContextProps
  } = props;

  return (
    <AntdConfigProvider
      {...antdConfigProviderProps}
      borderRadius={
        antdConfigProviderProps && "borderRadius" in antdConfigProviderProps
          ? antdConfigProviderProps.borderRadius!
          : 6
      }
      colorBgBase={
        antdConfigProviderProps && "colorBgBase" in antdConfigProviderProps
          ? antdConfigProviderProps.colorBgBase!
          : "#ffffff"
      }
      colorError={
        antdConfigProviderProps && "colorError" in antdConfigProviderProps
          ? antdConfigProviderProps.colorError!
          : "#ff4d4f"
      }
      colorInfo={
        antdConfigProviderProps && "colorInfo" in antdConfigProviderProps
          ? antdConfigProviderProps.colorInfo!
          : "#006AFF"
      }
      colorPrimary={
        antdConfigProviderProps && "colorPrimary" in antdConfigProviderProps
          ? antdConfigProviderProps.colorPrimary!
          : "#1677FF"
      }
      colorSuccess={
        antdConfigProviderProps && "colorSuccess" in antdConfigProviderProps
          ? antdConfigProviderProps.colorSuccess!
          : "#52c41a"
      }
      colorWarning={
        antdConfigProviderProps && "colorWarning" in antdConfigProviderProps
          ? antdConfigProviderProps.colorWarning!
          : "#faad14"
      }
      controlHeight={
        antdConfigProviderProps && "controlHeight" in antdConfigProviderProps
          ? antdConfigProviderProps.controlHeight!
          : 32
      }
      defaultDark={
        antdConfigProviderProps && "defaultDark" in antdConfigProviderProps
          ? antdConfigProviderProps.defaultDark!
          : false
      }
      lineWidth={
        antdConfigProviderProps && "lineWidth" in antdConfigProviderProps
          ? antdConfigProviderProps.lineWidth!
          : 1
      }
      loadingText={
        antdConfigProviderProps && "loadingText" in antdConfigProviderProps
          ? antdConfigProviderProps.loadingText!
          : "\u5730\u7403\u536b\u89c6"
      }
      removeLoading={
        antdConfigProviderProps && "removeLoading" in antdConfigProviderProps
          ? antdConfigProviderProps.removeLoading!
          : undefined
      }
      sizeStep={
        antdConfigProviderProps && "sizeStep" in antdConfigProviderProps
          ? antdConfigProviderProps.sizeStep!
          : 4
      }
      sizeUnit={
        antdConfigProviderProps && "sizeUnit" in antdConfigProviderProps
          ? antdConfigProviderProps.sizeUnit!
          : 4
      }
      themeStyles={
        antdConfigProviderProps && "themeStyles" in antdConfigProviderProps
          ? antdConfigProviderProps.themeStyles!
          : true
          ? {
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "1.5",
              color: "#535353",
              letterSpacing: "normal"
            }
          : undefined
      }
      wireframe={
        antdConfigProviderProps && "wireframe" in antdConfigProviderProps
          ? antdConfigProviderProps.wireframe!
          : false
      }
    >
      <StrapiCredentialsProvider
        {...strapiCredentialsProviderProps}
        host={
          strapiCredentialsProviderProps &&
          "host" in strapiCredentialsProviderProps
            ? strapiCredentialsProviderProps.host!
            : "https://strapi-app.plasmic.app"
        }
        token={
          strapiCredentialsProviderProps &&
          "token" in strapiCredentialsProviderProps
            ? strapiCredentialsProviderProps.token!
            : undefined
        }
      >
        <SanityCredentialsProvider
          {...sanityCredentialsProviderProps}
          apiVersion={
            sanityCredentialsProviderProps &&
            "apiVersion" in sanityCredentialsProviderProps
              ? sanityCredentialsProviderProps.apiVersion!
              : undefined
          }
          dataset={
            sanityCredentialsProviderProps &&
            "dataset" in sanityCredentialsProviderProps
              ? sanityCredentialsProviderProps.dataset!
              : "production"
          }
          projectId={
            sanityCredentialsProviderProps &&
            "projectId" in sanityCredentialsProviderProps
              ? sanityCredentialsProviderProps.projectId!
              : "b2gfz67v"
          }
          token={
            sanityCredentialsProviderProps &&
            "token" in sanityCredentialsProviderProps
              ? sanityCredentialsProviderProps.token!
              : undefined
          }
          useCdn={
            sanityCredentialsProviderProps &&
            "useCdn" in sanityCredentialsProviderProps
              ? sanityCredentialsProviderProps.useCdn!
              : undefined
          }
        >
          <CmsCredentialsProvider
            {...cmsCredentialsProviderProps}
            databaseId={
              cmsCredentialsProviderProps &&
              "databaseId" in cmsCredentialsProviderProps
                ? cmsCredentialsProviderProps.databaseId!
                : undefined
            }
            databaseToken={
              cmsCredentialsProviderProps &&
              "databaseToken" in cmsCredentialsProviderProps
                ? cmsCredentialsProviderProps.databaseToken!
                : undefined
            }
            host={
              cmsCredentialsProviderProps &&
              "host" in cmsCredentialsProviderProps
                ? cmsCredentialsProviderProps.host!
                : "https://data.plasmic.app"
            }
            locale={
              cmsCredentialsProviderProps &&
              "locale" in cmsCredentialsProviderProps
                ? cmsCredentialsProviderProps.locale!
                : undefined
            }
          >
            <CommerceProviderComponent
              {...commerceProviderComponentProps}
              accessToken={
                commerceProviderComponentProps &&
                "accessToken" in commerceProviderComponentProps
                  ? commerceProviderComponentProps.accessToken!
                  : "ef7d41c7bf7e1c214074d0d3047bcd7b"
              }
              storeDomain={
                commerceProviderComponentProps &&
                "storeDomain" in commerceProviderComponentProps
                  ? commerceProviderComponentProps.storeDomain!
                  : "next-js-store.myshopify.com"
              }
            >
              <GlobalContext
                {...globalContextProps}
                store={
                  globalContextProps && "store" in globalContextProps
                    ? globalContextProps.store!
                    : undefined
                }
              >
                {children}
              </GlobalContext>
            </CommerceProviderComponent>
          </CmsCredentialsProvider>
        </SanityCredentialsProvider>
      </StrapiCredentialsProvider>
    </AntdConfigProvider>
  );
}
