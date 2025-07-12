import { createLink, type LinkComponent } from '@tanstack/react-router';
import React from 'react';

import { Button } from '@/components/ui/button';

interface BasicLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
}
const BasicLinkComponent = React.forwardRef<HTMLAnchorElement, BasicLinkProps>(
  (props, ref) => {
    return <a ref={ref} {...props} className={`${props.className}`} />;
  },
);

const CreatedLinkComponent = createLink(BasicLinkComponent);

export const CustomLink: LinkComponent<typeof BasicLinkComponent> = (props) => {
  return <CreatedLinkComponent preload={'intent'} {...props} />;
};

interface BasicButtonLinkProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}
const BasicButtonLinkComponent = React.forwardRef<
  HTMLButtonElement,
  BasicButtonLinkProps
>((props, ref) => {
  return <Button ref={ref} {...props} className={`${props.className}`} />;
});

const CreatedButtonLinkComponent = createLink(BasicButtonLinkComponent);

export const CustomButtonLink: LinkComponent<
  typeof BasicButtonLinkComponent
> = (props) => {
  return <CreatedButtonLinkComponent preload={'intent'} {...props} />;
};
