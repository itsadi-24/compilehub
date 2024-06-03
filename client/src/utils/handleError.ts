import { toast } from 'sonner';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleError = (error: any) => {
  console.log(error.message);
  toast('Error:' + error.message);
};
