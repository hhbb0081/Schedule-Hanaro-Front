type HeaderProps = {
  bankName: string;
};

export function Header({ bankName }: HeaderProps) {
  return (
    <header className='fixed left-52 w-full py-[0.5rem] pl-[1.5rem] text-left shadow-lg'>
      <h1 className='text-[1.5rem] font-extrabold'>{bankName}</h1>
    </header>
  );
}
