import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import { forwardRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className='fixed left-1/2 top-5 z-10 flex w-[80%] max-w-[24rem] -translate-x-1/2 transform items-center gap-3 rounded-[0.9375rem] border-b-[1px] border-input bg-white px-6 py-2 shadow-[0_4px_20px_2px_rgba(0,0,0,0.1)]'>
        <Search width='1.625rem' height='1.625rem' />
        <input
          type={type}
          className={cn(
            'input flex h-10 w-full px-3 py-2 text-sm text-lightGrey file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-border focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          placeholder='영업점을 검색하세요...'
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
SearchInput.displayName = 'SearchInput';

export { SearchInput };
