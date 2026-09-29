/* eslint-disable  @typescript-eslint/no-explicit-any */
import { forwardRef, type JSX } from "react";
import type {
  Ref,
  ReactNode,
  ElementType,
  ReactElement,
  ComponentPropsWithoutRef,
} from "react";

/*
  forwardRefWithAs lets us forward refs while keeping the correct component type,
  which can be specified by the `as` prop.
*/

export type ElementTagNameMap = HTMLElementTagNameMap &
  Pick<
    SVGElementTagNameMap,
    Exclude<keyof SVGElementTagNameMap, keyof HTMLElementTagNameMap>
  >;

export type AsProp<Comp extends ElementType, Props> = {
  as?: Comp;
  ref?: Ref<
    Comp extends keyof ElementTagNameMap
      ? ElementTagNameMap[Comp]
      : Comp extends new (...args: unknown[]) => unknown
      ? InstanceType<Comp>
      : undefined
  >;
} & Omit<ComponentPropsWithoutRef<Comp>, "as" | keyof Props>;

export type CompWithAsProp<Props, DefaultElementType extends ElementType> = <
  Comp extends ElementType = DefaultElementType
>(
  props: AsProp<Comp, Props> & Props
) => ReactElement<any>;

export const forwardRefWithAs = <
  DefaultElementType extends ElementType,
  BaseProps
>(
  render: (
    props: BaseProps & { as?: ElementType },
    ref: React.Ref<unknown>
  ) => Exclude<ReactNode, undefined>
): CompWithAsProp<BaseProps, DefaultElementType> => {
  return forwardRef(render as never) as CompWithAsProp<
    BaseProps,
    DefaultElementType
  >;
};

type GetEventHandlers<T extends keyof JSX.IntrinsicElements> = Extract<
  keyof JSX.IntrinsicElements[T],
  `on${string}`
>;

/**
 * Provides the event type for a given element and handler.
 *
 * @example
 *
 *
 */
export type EventFor<
  TElement extends keyof JSX.IntrinsicElements,
  THandler extends GetEventHandlers<TElement>
> = JSX.IntrinsicElements[TElement][THandler] extends
  | ((e: infer TEvent) => unknown)
  | undefined
  ? TEvent
  : never;
