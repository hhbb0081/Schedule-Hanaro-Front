// DropdownToggle.tsx
import { ReactComponent as ChangeButton } from '@/assets/icons/reservaion/change.svg';
import { ReactComponent as UpButton } from '@/assets/icons/reservaion/up.svg';
import { ReactComponent as DownButton } from '@/assets/icons/reservaion/down.svg';

interface ChangeToggleProps {
  isOpen: boolean;
  onToggle: () => void;
  selectedTab: string;
  onSelect: (tabName: string) => void;
}

export function ChangeToggle({
  isOpen,
  onToggle,
  selectedTab,
  onSelect,
}: ChangeToggleProps) {
  return (
    <div className='relative'>
      <div
        className='mb-[1.6875rem] flex items-center text-left text-[1.5rem] font-bold text-[#2b2b2b]'
        onClick={onToggle}
      >
        <span className='mr-2'>{selectedTab}</span>
        {isOpen ? <UpButton /> : <DownButton />}
      </div>
      {isOpen && (
        <div
          className='absolute z-50 mt-[12rem] w-[16rem] rounded-lg bg-white shadow-lg'
          style={{ top: '2rem' }}
        >
          <ChangeToggleOption label='1:1 상담 내역' onSelect={onSelect} />
          <ChangeToggleOption label='전화 상담 내역' onSelect={onSelect} />
        </div>
      )}
    </div>
  );
}

interface ChangeToggleOptionProps {
  label: string;
  onSelect: (label: string) => void;
}

function ChangeToggleOption({ label, onSelect }: ChangeToggleOptionProps) {
  return (
    <div
      onClick={() => onSelect(label)}
      className='relative mx-[0.5rem] my-[0.5rem] flex cursor-pointer items-center justify-center rounded-md px-[.25rem] py-[.25rem] text-[1.5rem] font-bold hover:bg-gray-100'
    >
      <ChangeButton className='absolute right-[1rem] h-[1rem] w-[1rem]' />
      {label}
    </div>
  );
}
