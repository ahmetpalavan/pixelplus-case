import styles from "@/app/styles/variables.module.scss";
import { useModalStore } from "@/hooks/useModalStore";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

interface IFormInput {
  name: string;
  job: string;
}
const CreateUserModal: React.FC = () => {
  const queryClient = useQueryClient();
  const { isModalOpen, onClose } = useModalStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const handleClose = () => {
    onClose();
    reset();
  };

  const mutation = useMutation(
    (newUser: IFormInput) => {
      return axios.post("https://reqres.in/api/users", newUser);
    },
    {
      onSuccess: (response) => {
        console.log("response.data =>", response.data);
        toast.success(
          `User Created! name: ${response.data.name} job: ${response.data.job} ID: ${response.data.id}, Created At: ${response.data.createdAt}`
        );
        reset();
        onClose();
      },
      onError: (error) => {
        toast.error("Error creating user");
        console.error(error);
      },
    }
  );

  const onSubmit = (data: IFormInput) => {
    mutation.mutate(data);
    queryClient.invalidateQueries("users");
  };

  if (!isModalOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div className={styles.modal} onClick={handleClose}>
        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true })} placeholder="Name" type="text" />
            {errors.name && <span>Name is required</span>}
            <input {...register("job", { required: true })} placeholder="Job" type="text" />
            {errors.job && <span>Email is required</span>}
            <div className={styles.buttonContainer}>
              <button onClick={() => handleClose()}>Close</button>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUserModal;
