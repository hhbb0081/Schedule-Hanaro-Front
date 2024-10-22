import { useParams } from 'react-router-dom';

export function BranchDetailPage() {
  const { id } = useParams();
  return <div className='text-4xl'>Branch Detail Page {id}</div>;
}
