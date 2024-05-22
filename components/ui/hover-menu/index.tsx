'use client'
import React from 'react';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { Box } from '../box';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';

const hoverMenuStyle = tva({
  base: 'min-w-[200px] py-2 rounded-sm bg-background-0 group inline-block static',
});

const hoverMenuContainerStyle = tva({
  base: 'flex-row items-center :web:cursor-pointer border-t  border-b border-solid border-background-200 flex justify-center align-center absolute bg-background-0 z-10 hidden  group-hover:block w-full left-0 top-[69px]',
});

type IMenuProps = React.ComponentProps<any> &
  VariantProps<typeof hoverMenuContainerStyle>;

const HoverMenu = ({
  className,
  ...props
}: { className?: string; contentClassNames?: string } & IMenuProps) => {
  const TriggerComponent = () => {
    return <>{props.trigger}</>;
  };
  return (
    <Box
      className={hoverMenuStyle({
        class: className,
      })}
    >
      <TriggerComponent />
      <Box
        className={hoverMenuContainerStyle({
          class: `${props.contentClassNames}`,
        })}
      >
        {props.children}
      </Box>
    </Box>
  );
};

HoverMenu.displayName = 'HoverMenu';

export { HoverMenu };
