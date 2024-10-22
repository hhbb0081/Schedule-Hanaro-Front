type HeaderProps = {
  bankName: string;
};

export function Header({ bankName }: HeaderProps) {
  return (
    <header className='p-4 shadow-xl'>
      <h1 className='text-2xl font-bold'>{bankName}</h1>
    </header>
  );
}
