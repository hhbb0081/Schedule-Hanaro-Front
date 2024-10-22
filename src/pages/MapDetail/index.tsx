import { useParams } from 'react-router-dom';

export function MapDetailPage() {
  const { id } = useParams();
  return <div className='text-4xl'>Map Detail Page {id}</div>;
}
