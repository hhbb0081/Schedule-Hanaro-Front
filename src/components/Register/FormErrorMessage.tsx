type FormErrorMessageProps = {
  error: string | undefined;
};

export function FormErrorMessage({ error }: FormErrorMessageProps) {
  if (!error) return null;
  return <p className='px-1 py-1 text-left text-xs text-red-500'>{error}</p>;
}
