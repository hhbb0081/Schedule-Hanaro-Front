// import React from 'react';

// type InfoCardProps = {
//   waitingCount: number;
//   estimatedTime: number;
//   todayVisitors: number | null;
// };

// type infoProps = {
//   description: string;
//   suffix: string;
//   count: number;
// };

// export function Info({ description, suffix, count }: infoProps) {
//   return (
//     <div className='flex flex-col items-center justify-center'>
//       <span
//         className='text-sm font-semibold'
//         style={{ color: '#666666', fontSize: '0.875rem' }}
//       >
//         {description}
//       </span>
//       <div className='mt-[0.9375rem] text-[1.5rem] font-bold'>
//         {count}
//         {suffix}
//       </div>
//     </div>
//   );
// }

// export default function InfoCard({
//   waitingCount,
//   estimatedTime,
//   todayVisitors,
// }: InfoCardProps) {
//   const infoItems = [
//     { description: '현재 대기인수', suffix: '명', count: waitingCount },
//     { description: '예상 소요시간', suffix: '분', count: estimatedTime },
//     // { description: '오늘 방문객', suffix: '명', count: todayVisitors },
//   ];

//   if (todayVisitors !== null) {
//     infoItems.push({
//       description: '오늘 방문객',
//       suffix: '명',
//       count: todayVisitors,
//     });
//   }

//   return (
//     <div className='flex justify-center'>
//       <div className='mx-auto my-[2rem] w-11/12 rounded-lg border border-gray-300'>
//         <div
//           className='flex h-[1.875rem] items-center justify-evenly'
//           style={{ height: '6.25rem' }}
//         >
//           {infoItems.map((item, index) => (
//             <React.Fragment key={index}>
//               <Info
//                 description={item.description}
//                 suffix={item.suffix}
//                 count={item.count}
//               />
//               {index < infoItems.length - 1 && (
//                 <div className='h-[60%] w-[0.0625rem] bg-[#d9d9d9]'></div>
//               )}
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // return (
// //   <div className='mx-auto my-[2rem] w-11/12 rounded-lg border border-gray-300'>
// //     <div
// //       className='h-30 flex items-center justify-between'
// //       style={{ height: '100px' }}
// //     >
// //       <div className='flex flex-grow flex-col items-center'>
// //         <Info description='현재 대기인수' suffix='명' count={waitingCount} />
// //       </div>
// //       <div
// //         style={{ height: '60%', width: '1px', backgroundColor: '#d9d9d9' }}
// //       ></div>
// //       <div className='flex flex-grow flex-col items-center'>
// //         <Info description='예상 소요시간' suffix='분' count={estimatedTime} />
// //       </div>
// //       <div
// //         style={{ height: '60%', width: '1px', backgroundColor: '#d9d9d9' }}
// //       ></div>
// //       <div className='flex flex-grow flex-col items-center'>
// //         <Info description='오늘 방문객' suffix='명' count={todayVisitors} />
// //       </div>
// //     </div>
// //   </div>
// // );

import React from 'react';

type InfoCardProps = {
  waitingCount: number;
  estimatedTime: number;
  todayVisitors: number | null;
};

type infoProps = {
  description: string;
  suffix: string;
  count: number;
};

export function Info({ description, suffix, count }: infoProps) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <span
        className='text-sm font-semibold'
        style={{ color: '#666666', fontSize: '0.875rem' }}
      >
        {description}
      </span>
      <div className='mt-[0.5rem] text-[1.5rem] font-bold'>
        {count}
        {suffix}
      </div>
    </div>
  );
}

export default function InfoCard({
  waitingCount,
  estimatedTime,
  todayVisitors,
}: InfoCardProps) {
  const infoItems = [
    { description: '현재 대기인수', suffix: '명', count: waitingCount },
    { description: '예상 소요시간', suffix: '분', count: estimatedTime },
  ];

  if (todayVisitors !== null) {
    infoItems.push({
      description: '오늘 방문객',
      suffix: '명',
      count: todayVisitors,
    });
  }

  return (
    <div className='flex justify-center'>
      <div
        className={`mx-auto my-[2rem] w-${infoItems.length === 2 ? '10/12' : '11/12'} rounded-lg border border-gray-300 p-[1rem] ${infoItems.length === 2 ? 'h-[11.5rem]' : 'h-auto'}`}
      >
        <div
          className={`flex ${infoItems.length === 2 ? 'flex-col gap-[1rem]' : 'flex-row'} items-center justify-evenly`}
        >
          {infoItems.map((item, index) => (
            <React.Fragment key={index}>
              <Info
                description={item.description}
                suffix={item.suffix}
                count={item.count}
              />
              {index < infoItems.length - 1 && (
                <div className='h-[60%] w-[0.0625rem] bg-[#d9d9d9]'></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
