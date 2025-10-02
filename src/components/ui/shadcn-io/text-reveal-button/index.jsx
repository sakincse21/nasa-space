'use client';;
import React from 'react';
import { cn } from '@/lib/utils';

export const TextRevealButton = React.forwardRef(({
  text = "",
  revealColor = "#ff3737",
  strokeColor = "rgba(100, 100, 100, 0.7)",
  className,
  style,
  ...props
}, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative cursor-pointer bg-transparent border-none p-0 m-0 h-auto font-['Arial'] uppercase whitespace-nowrap",
        className
      )}
      style={{
        fontSize: '3em',
        letterSpacing: '3px',
        color: 'transparent',
        WebkitTextStroke: `1px ${strokeColor}`,
        ...style,
      }}
      {...props}>
      <span>
        &nbsp;{text}&nbsp;
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 w-0 overflow-hidden transition-all duration-500 group-hover:w-full group-hover:[filter:drop-shadow(0_0_23px_#ff3737)]"
        style={{
          color: revealColor,
          borderRight: `6px solid ${revealColor}`,
          WebkitTextStroke: `1px ${revealColor}`,
        }}>
        &nbsp;{text}&nbsp;
      </span>
    </button>
  );
});

TextRevealButton.displayName = "TextRevealButton";