/* eslint-disable react/prop-types */
export type HashTag = {
  id: number;
  label: string;
};

type ReservationDetailHeaderProps = {
  title: string;
  tags: HashTag[];
};

const ReservationDetailCallTags: React.FC<ReservationDetailHeaderProps> = ({
  title,
  tags,
}) => {
  return (
    <div className='flex w-full items-center'>
      <label className='ml-2 text-2xl font-bold'>{title}</label>
      <div className='ml-4 flex space-x-2'>
        {tags.map(({ id, label }) => (
          <span
            key={id}
            className='rounded-full bg-[#008485]/20 px-3 py-1 text-sm text-[#008485]'
          >
            #{label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ReservationDetailCallTags;
