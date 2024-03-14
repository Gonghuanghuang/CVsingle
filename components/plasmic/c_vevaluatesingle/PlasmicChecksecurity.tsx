// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rXnSEQkb737qyHw1C9ru8K
// Component: mRk8_altAQpa

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Checkbox from "../../Checkbox"; // plasmic-import: NZrNBU1ITaCE/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: rXnSEQkb737qyHw1C9ru8K/projectcss
import sty from "./PlasmicChecksecurity.module.css"; // plasmic-import: mRk8_altAQpa/css

createPlasmicElementProxy;

export type PlasmicChecksecurity__VariantMembers = {};
export type PlasmicChecksecurity__VariantsArgs = {};
type VariantPropType = keyof PlasmicChecksecurity__VariantsArgs;
export const PlasmicChecksecurity__VariantProps = new Array<VariantPropType>();

export type PlasmicChecksecurity__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicChecksecurity__ArgsType;
export const PlasmicChecksecurity__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicChecksecurity__OverridesType = {
  checkbox2?: Flex__<typeof Checkbox>;
};

export interface DefaultChecksecurityProps {
  children?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicChecksecurity__RenderFunc(props: {
  variants: PlasmicChecksecurity__VariantsArgs;
  args: PlasmicChecksecurity__ArgsType;
  overrides: PlasmicChecksecurity__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "checkbox2.isChecked",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <Checkbox
      data-plasmic-name={"checkbox2"}
      data-plasmic-override={overrides.checkbox2}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.checkbox2)}
      isChecked={
        generateStateValueProp($state, ["checkbox2", "isChecked"]) ?? false
      }
      onChange={(...eventArgs) => {
        generateStateOnChangeProp($state, ["checkbox2", "isChecked"])(
          eventArgs[0]
        );
      }}
    >
      {renderPlasmicSlot({
        defaultContents: "\u5b58\u5728\u5b89\u5168\u98ce\u9669",
        value: args.children
      })}
    </Checkbox>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  checkbox2: ["checkbox2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  checkbox2: typeof Checkbox;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicChecksecurity__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicChecksecurity__VariantsArgs;
    args?: PlasmicChecksecurity__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicChecksecurity__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicChecksecurity__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicChecksecurity__ArgProps,
          internalVariantPropNames: PlasmicChecksecurity__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicChecksecurity__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "checkbox2") {
    func.displayName = "PlasmicChecksecurity";
  } else {
    func.displayName = `PlasmicChecksecurity.${nodeName}`;
  }
  return func;
}

export const PlasmicChecksecurity = Object.assign(
  // Top-level PlasmicChecksecurity renders the root element
  makeNodeComponent("checkbox2"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicChecksecurity
    internalVariantProps: PlasmicChecksecurity__VariantProps,
    internalArgProps: PlasmicChecksecurity__ArgProps
  }
);

export default PlasmicChecksecurity;
/* prettier-ignore-end */