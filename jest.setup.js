import '@testing-library/jest-dom';
import 'cross-fetch/polyfill';


jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
    useSearchParams: jest.fn(),
  }));