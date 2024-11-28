import { DatePicker } from '../Call/DatePicker'; // 날짜 선택 컴포넌트
import { SELECT_ITEMS } from '@/constants';
import { Search } from 'lucide-react';
import { Input } from '../../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select';
import { Button } from '../../ui/button';
import arrowDown from '../../../assets/icons/arrow_down.svg';

type SearchConditions = {
  startDate?: Date;
  endDate?: Date;
  category: string;
  keyword: string;
};

type SearchConditionSettingProps = {
  searchConditions: SearchConditions;
  setSearchConditions: React.Dispatch<React.SetStateAction<SearchConditions>>; // 타입 정의
  onSearch: (conditions: SearchConditions) => void;
  onReset: () => void;
};

function SearchConditionSetting({
  searchConditions,
  setSearchConditions,
  onSearch,
  onReset,
}: SearchConditionSettingProps) {
  const { startDate, endDate, category, keyword } = searchConditions;

  // 카테고리 변경 처리
  const handleInputChange = <K extends keyof SearchConditions>(
    field: K,
    value: SearchConditions[K]
  ) => {
    setSearchConditions((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div
      className='mx-auto w-full max-w-[1300px] rounded-lg bg-white p-6'
      style={{
        boxShadow:
          '0px -8px 18px rgba(0, 0, 0, 0.04), 0px 8px 12px rgba(0, 0, 0, 0.08)',
      }}
    >
      {/* 상단 제목 영역 */}
      <div className='mb-6 flex justify-start'>
        <h2 className='text-xl font-extrabold text-black'>검색 조건 설정</h2>
      </div>

      {/* 검색 조건 */}
      <div className='mb-6 grid grid-cols-3 items-start gap-6'>
        {/* 기간 선택 */}
        <div className='flex flex-col items-start'>
          <label className='mb-1 self-start text-base font-semibold text-black'>
            기간
          </label>
          <div className='flex items-center space-x-2'>
            <DatePicker
              selected={startDate}
              onChange={(date) => handleInputChange('startDate', date)}
              maxDate={new Date()}
              placeholderText='시작일'
            />
            <span className='text-gray-500'>~</span>
            <DatePicker
              selected={endDate}
              onChange={(date) => handleInputChange('endDate', date)}
              minDate={startDate || new Date()}
              maxDate={new Date()}
              placeholderText='종료일'
            />
          </div>
        </div>
        {/* className='text-lightGray shadow-md h-10 w-full w-[9rem] h-[3rem] align-middle rounded-full justify-start border-input pl-3 text-left' */}
        {/* 카테고리 선택 */}
        <div className='flex flex-col pl-7'>
          <label className='mb-1 self-start text-base font-semibold text-black'>
            카테고리
          </label>
          <div
            className='relative flex-shrink-0'
            style={{ width: '14rem', height: '2.5rem' }}
          >
            <Select
              value={category}
              onValueChange={(value) => handleInputChange('category', value)}
            >
              <SelectTrigger className='relative h-[3rem] w-[14rem] rounded-full border-none bg-white pl-3 text-left text-base text-gray-500 shadow-md'>
                <span className='ml-1'>
                  <SelectValue placeholder='전체' />
                </span>
                <span className='absolute right-3 top-1/2 -translate-y-1/2'>
                  <img src={arrowDown} className='ml-0 mr-2 inline-block' />
                </span>
              </SelectTrigger>
              <SelectContent>
                {SELECT_ITEMS.map(({ value, label }) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* 검색어 입력 및 버튼 */}
        <div className='flex flex-col items-start'>
          <label className='mb-1 self-start text-base font-semibold text-black'>
            검색어
          </label>
          <div
            className='relative mb-4 flex items-center'
            style={{ width: '22rem', height: '3rem' }}
          >
            <Search className='absolute left-3' size={18} />
            <Input
              type='text'
              value={keyword}
              onChange={(e) => handleInputChange('keyword', e.target.value)}
              // placeholder='검색'
              className='placeholer:text-base h-full w-full rounded-full border-none bg-white pl-10 pr-4 text-base shadow-md placeholder:text-gray-500 focus:outline-none'
            />
          </div>
          {/* 버튼 */}
          <div className='flex w-full justify-end space-x-4'>
            <Button
              variant='outline'
              onClick={onReset}
              className='h-[4rem] w-[14rem] rounded-full border-2 border-gray-800 bg-white px-4 py-2 text-xl font-bold text-gray-600 hover:bg-gray-100'
            >
              초기화
            </Button>
            <Button
              variant='default'
              onClick={() => onSearch(searchConditions)}
              className='h-[4rem] w-[14rem] rounded-full bg-gray-800 px-4 py-2 text-xl font-bold text-white hover:bg-gray-900'
            >
              검색
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchConditionSetting;
