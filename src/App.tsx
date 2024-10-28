import { RouterProvider } from 'react-router-dom';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'jotai';
import { useRouter } from '@/hooks';
import { ToastProvider } from './components/ui/toast';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false },
  },
});

function App() {
  const router = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <Provider>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </Provider>
      </ToastProvider>
    </QueryClientProvider>
  );
}

export default App;
