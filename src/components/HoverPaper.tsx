import { Paper, PaperProps } from '@mantine/core';
import { ReactNode, useState } from 'react';

interface HoverPaperProps extends PaperProps {
  children: ReactNode;
  className?: string;
}

export default function HoverPaper({ children, className, ...props }: HoverPaperProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Paper
      {...props}
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
        borderColor: hovered ? 'var(--mantine-color-violet-4)' : undefined,
        boxShadow: hovered ? '0 4px 20px rgba(147, 51, 234, 0.12)' : undefined,
        ...props.style,
      }}
    >
      {children}
    </Paper>
  );
}
