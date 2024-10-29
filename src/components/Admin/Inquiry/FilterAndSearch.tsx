import { useState } from 'react';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '../../ui/select';
import { Input } from '../../ui/input';
import { Search } from 'lucide-react';
import { SELECT_ITEMS } from '@/constants/inquiryCategory'; // 같은 폴더에서 임포트

function FilterAndSearch({
  setActiveCategory,
}: {
  setActiveCategory: (category: string) => void;
}) {
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setActiveCategory(category); // 상위 컴포넌트에 카테고리 변경 전달
  };

  return (
    <div className='flex items-center space-x-5'>
      <div
        className='relative flex-shrink-0'
        style={{ width: '8rem', height: '2.0625rem' }}
      >
        <Select value={selectedCategory} onValueChange={handleCategoryChange}>
          <SelectTrigger className='h-full w-full rounded-full border-none bg-white px-4 py-2 text-[0.875rem] font-normal text-gray-600 shadow-md'>
            <SelectValue placeholder='전체' />
          </SelectTrigger>
          <SelectContent>
            {SELECT_ITEMS.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div
        className='relative flex flex-shrink-0 items-center'
        style={{ width: '11.9375rem', height: '2.0625rem' }}
      >
        <Search className='absolute left-3 text-black' size={18} />
        <Input
          type='text'
          placeholder='검색'
          className='h-full w-full rounded-full bg-white pl-10 pr-4 shadow-md focus:outline-none'
        />
      </div>
    </div>
  );
}

export default FilterAndSearch;
