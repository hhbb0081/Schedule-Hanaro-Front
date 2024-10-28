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
            <SelectItem value='전체'>전체</SelectItem>
            <SelectItem value='예적금'>예적금</SelectItem>
            <SelectItem value='펀드'>펀드</SelectItem>
            <SelectItem value='대출'>대출</SelectItem>
            <SelectItem value='외환'>외환</SelectItem>
            <SelectItem value='마이데이터'>마이데이터</SelectItem>
            <SelectItem value='모바일'>모바일</SelectItem>
            <SelectItem value='인터넷뱅킹'>인터넷뱅킹</SelectItem>
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
