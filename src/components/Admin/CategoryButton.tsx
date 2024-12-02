function CategoryButton({ category }: { category: string }) {
  return (
    <div className='mt-[0.5rem] rounded-full bg-[#008485] bg-opacity-10 px-[1rem] py-[0.25rem] text-[.75rem] text-[#008485]'>
      {category}
    </div>
  );
}

export default CategoryButton;
