'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAppSelector, useAppDispatch } from '@/hooks/useAppState';
import { closeModal } from '@/redux/features/modal/modal.slice';

interface IModalProps {
  title?: string;
  subTitle?: string;
  body?: React.ReactElement;
  positiveAction?: () => void;
  positiveLabel?: string;
  negitiveAction?: () => void;
  negitiveLabel?: string;
}

const Modal: React.FC<IModalProps> = ({
  title,
  subTitle,
  body,
  positiveAction,
  positiveLabel,
  negitiveAction,
  negitiveLabel,
}) => {
  const { modalState } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  return (
    <Dialog open={modalState} onOpenChange={() => dispatch(closeModal())}>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{subTitle}</DialogDescription>
        </DialogHeader>
        {body}
        <DialogFooter>
          <Button variant={'outline'} onClick={negitiveAction}>
            {negitiveLabel}
          </Button>
          <Button type='submit' onClick={positiveAction}>
            {positiveLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
