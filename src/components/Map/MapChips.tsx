import { MAP_CHIPS } from '@/constants';
import { Badge } from '../ui/badge';

function MapChips({
  value,
  setValue,
}: {
  value: number;
  setValue: (id: number) => void;
}) {
  return (
    <span className='space-x-2'>
      {MAP_CHIPS.map(({ id, txt }: { id: number; txt: string }) => (
        <Badge
          key={id}
          variant={value === id ? 'active' : 'noactive'}
          className='px-6 py-1 text-[0.875rem]'
          onClick={() => setValue(id)}
        >
          {txt}
        </Badge>
      ))}
    </span>
  );
}

export default MapChips;
