/* eslint-disable react/prop-types */
export type HashTag = {
  id: number;
  label: string;
};

type ReservationDetailTagProps = {
  tags: HashTag[];
};

const ReservationDetailInquiryTags: React.FC<ReservationDetailTagProps> = ({
  tags,
}) => {
  return (
    <div className='flex w-full items-center'>
      <div className='flex space-x-2'>
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

export default ReservationDetailInquiryTags;
