import {
  type ElementType,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react';

type ContainerProp<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProp<C>) {
  const Component = as || 'div';

  return <Component {...props}>{children}</Component>;
}

export default Container;
