import { ReactComponent as ChangeButton } from '@/assets/icons/reservation/change.svg';
import { ReactComponent as UpButton } from '@/assets/icons/reservation/up.svg';
import { ReactComponent as DownButton } from '@/assets/icons/reservation/down.svg';
import { ReactComponent as PedestrainIcon } from '@/assets/icons/pedestrain.svg';
import { ReactComponent as AutomobileIcon } from '@/assets/icons/automobile.svg';
import { useMap } from '@/hooks/map-context';
interface ChangeToggleProps {
  isOpen: boolean;
  onToggle: () => void;
  selectedTab: 'pedestrain' | 'automobile';
  onSelect: (tabName: 'pedestrain' | 'automobile') => void;
}

export function ChangeToggle({
  isOpen,
  onToggle,
  selectedTab,
  onSelect,
}: ChangeToggleProps) {
  return (
    <div className='flex flex-col'>
      <div
        className='mb-[1.6875rem] flex items-center justify-between text-left text-[1.0rem] font-bold text-[#2b2b2b]'
        onClick={onToggle}
      >
        <span className='mr-[0.5rem]'>
          {selectedTab === 'pedestrain' ? (
            <div className='flex items-center gap-2'>
              <PedestrainIcon />
              <div>도보</div>
            </div>
          ) : (
            <div className='flex items-center gap-2'>
              <AutomobileIcon />
              <div>차량</div>
            </div>
          )}
        </span>
        {isOpen ? <UpButton /> : <DownButton />}
      </div>
      {isOpen && (
        <div className='absolute z-50 mt-[2rem] w-[7.5rem] rounded-[.9375rem] bg-white drop-shadow'>
          <div className='py-[1rem]'>
            <ChangeToggleOption
              label='pedestrain'
              selectedTab={selectedTab}
              onSelect={onSelect}
            />
            <ChangeToggleOption
              label='automobile'
              selectedTab={selectedTab}
              onSelect={onSelect}
            />
          </div>
        </div>
      )}
    </div>
  );
}

interface ChangeToggleOptionProps {
  label: 'pedestrain' | 'automobile';
  selectedTab: 'pedestrain' | 'automobile';
  onSelect: (label: 'pedestrain' | 'automobile') => void;
}

function ChangeToggleOption({
  label,
  selectedTab,
  onSelect,
}: ChangeToggleOptionProps) {
  const { setRouteTypeToAutomobile, setRouteTypeToPedestrain } = useMap();
  const isDisabled = label === selectedTab;
  const handleSelect = () => {
    if (!isDisabled) {
      onSelect(label);
      if (label === 'pedestrain') {
        setRouteTypeToPedestrain();
      } else if (label === 'automobile') {
        setRouteTypeToAutomobile();
      }
    }
  };
  return (
    <div className=''>
      <div
        onClick={handleSelect}
        className={`relative mx-[15px] my-[0.5rem] flex items-center justify-between rounded-[.625rem] px-[1.25rem] py-[0.7rem] text-[1.0625rem] font-semibold ${
          isDisabled
            ? 'cursor-not-allowed text-[#a8a8a8]'
            : 'cursor-pointer hover:bg-[#f1f1f1]'
        }`}
      >
        <ChangeButton
          className='absolute right-[1rem] h-[1rem] w-[1rem]'
          fill={isDisabled ? '#a8a8a8' : '#000000'}
        />
        {label === 'pedestrain' ? <div>도보</div> : <div>차량</div>}
      </div>
    </div>
  );
}
