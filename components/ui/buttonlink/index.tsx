'use client'
import React from 'react';
import { Link } from '../link';
import { Button, ButtonText } from '../button';
import { Icon } from '../icon';
import { Box } from '../box';
import { ArrowRightIcon } from '../icon/index.web';

const ButtonLink = ({
  variant = 'solid',
  ...props
}: {
  href: string;
  children: any;
  className?: string;
  variant?: 'solid' | 'outline' | 'link';
  buttonTextClassNames?: string;
  buttonIconClassNames?: string;
}) => {
  return (
    <Link
      {...props}
      className={`flex justify-between w-full p-4 ${props.className}`}
      href={props.href}
    >
      <Button
        className={`${variant === 'solid' ? 'hover:bg-primary-500' : ''} group p-0`}
        variant={variant}
      >
        <ButtonText
          className={`group-hover:-translate-x-3 transition duration-150 ${
            variant === 'solid'
              ? 'text-white group-hover:text-white'
              : 'text-background-100 group-hover:text-background-0'
          } ${props.buttonTextClassNames}`}
        >
          {props.children}
        </ButtonText>
        {/* <ButtonIcon> */}
          <Box className="hidden group-hover:block -translate-x-3 group-hover:translate-x-0 transition duration-300 ease-in">
            <Icon
              // className={`${
              //   variant === 'solid' ? 'text-white' : 'text-background-100'
              // } ${props.buttonIconClassNames} w-5 h-5`}
              as={ArrowRightIcon}
              className='text-white color-white'
            />
          </Box>
        {/* </ButtonIcon> */}
      </Button>
    </Link>
  );
};

ButtonLink.displayName = 'ButtonLink';
export { ButtonLink };
