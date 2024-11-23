type AnswerCardProps = {
  title: string;
};

// 카드 컴포넌트
export function AnswerCard({ title }: AnswerCardProps) {
  return (
    <div className='mx-auto flex max-w-md items-center rounded-bl-none rounded-br-[1.25rem] rounded-tl-[1.25rem] rounded-tr-[1.25rem] bg-white p-[1rem] drop-shadow'>
      <span className='mr-[0.75rem] text-[1rem] font-bold text-[#000000]'>
        Q
      </span>
      <p className='text-[#000000]'>{title}</p>
    </div>
  );
}

export default AnswerCard;
