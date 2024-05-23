import { toast } from 'sonner';

export const handleError = (error: any) => {
  console.log(error.message);
  toast('Error:' + error.message);
};
