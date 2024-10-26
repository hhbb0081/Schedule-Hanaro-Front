// import {
//   Controller,
//   Control,
//   FieldValues,
//   Path,
//   FieldError,
//   ControllerRenderProps,
// } from 'react-hook-form';
// import { ReactElement } from 'react';

// interface FormFieldProps<T extends FieldValues> {
//   name: Path<T>;
//   control: Control<T>;
//   rules?: object;
//   render: (field: ControllerRenderProps<T, Path<T>>) => ReactElement;
//   errorMessage?: string | FieldError;
// }

// export function FormField<T extends FieldValues>({
//   name,
//   control,
//   rules,
//   render,
//   errorMessage,
// }: FormFieldProps<T>): ReactElement {
//   const errorText =
//     typeof errorMessage === 'string' ? errorMessage : errorMessage?.message;

//   return (
//     <div className='w-full flex-1'>
//       <Controller
//         name={name}
//         control={control}
//         rules={rules}
//         render={({ field }) =>
//           render({
//             ...field,
//             value:
//               field.value instanceof Date
//                 ? field.value.toISOString().split('T')[0]
//                 : (field.value ?? ''),
//           })
//         }
//       />
//       <div className='min-h-[1rem]'>
//         {errorText && <p className='text-xs text-red-500'>{errorText}</p>}
//       </div>
//     </div>
//   );
// }
