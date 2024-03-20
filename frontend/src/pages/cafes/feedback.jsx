import {
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useCreate } from '../../services/cafe';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

const schema = z.object({
  for: z.string().min(1, { message: 'Name is required !' }),
  feedback: z.string().min(1, { message: 'Feedback is required!' }),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const { mutate: createMutation } = useCreate();
  const queryClient = useQueryClient();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onSubmit = async (data) => {
    createMutation(data, {
      onSuccess: () => {
        console.log('succeed');
      },
      onSettled: () => {
        reset();
      },
    });
  };
  return (
    <div>
      <div className="flex justify-center font-bold">
        <div className="text-textClr flex justify-center mt-5 text-3xl">
          Give Feedbacks
        </div>
      </div>
      <div></div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center">
          <Card className="w-[40%] mt-8 shadow-lg rounded-xl border border-cardBorder">
            <div className="p-4 m-10">
              <div className="text-xl text-headerBg">
                <div>
                  Cafe Name <span className="text-warningClr">*</span>
                </div>

                <input
                  type="text"
                  placeholder="Enter Cafe Name"
                  className="w-[100%] border border-inputBorderClr mt-3 rounded-md p-2 placeholder-headerBg"
                  {...register('for')}
                />
              </div>
              <p className="text-red-700">{errors.name?.message?.toString()}</p>
              <div className="mt-10 text-xl text-headerBg">
                <div>
                  Feedback <span className="text-warningClr">*</span>
                </div>
                <textarea
                  placeholder="Any Feedbacks...."
                  rows={10}
                  className="w-[100%] border border-inputBorderClr mt-3 rounded-md p-2 placeholder-headerBg"
                  {...register('feedback')}
                />
              </div>
              <p className="text-red-700">
                {errors.feedback?.message?.toString()}
              </p>
            </div>

            <div className="flex justify-end m-5">
              <button
                className="bg-tabsColor w-[30%] text-white p-3 rounded-xl"
                type="submit"
                onClick={handleClickOpen}
              >
                Submit
              </button>
            </div>

            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Thanks for your feedback.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <button
                  onClick={handleClose}
                  className="bg-tabsColor p-1 m-1 rounded-lg w-[30%]"
                >
                  <span className="text-white">OK</span>
                </button>
              </DialogActions>
            </Dialog>
          </Card>
        </div>
      </form>
    </div>
  );
};

export default Contact;
