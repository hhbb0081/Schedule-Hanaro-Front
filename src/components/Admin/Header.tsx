type HeaderProps = {
  bankName: string;
};

export function Header({ bankName }: HeaderProps) {
  return (
    <header className='fixed left-[225px] w-full py-5 pl-6 shadow-lg'>
      <h1 className='text-xl font-bold'>{bankName}</h1>
    </header>
  );
}
