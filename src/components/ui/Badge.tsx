import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-violet-700',
        className,
      )}
    >
      {children}
    </span>
  );
}
