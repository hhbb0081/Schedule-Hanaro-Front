type HeaderProps = {
  bankName: string;
  badnkNum: number;
};

export function Header({ bankName, badnkNum }: HeaderProps) {
  return (
    <header className='fixed left-[13rem] z-50 w-full py-[0.5rem] pl-[1.5rem] text-left shadow-[0_4px_50px_10px_rgba(0,0,0,0.07)]'>
      <h1 className='text-[1.5rem] font-extrabold'>
        {bankName}[{badnkNum}]
      </h1>
    </header>
  );
}
