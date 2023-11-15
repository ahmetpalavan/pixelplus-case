import styles from "@/app/styles/variables.module.scss";
import { useCreateUser } from "@/hooks/queries";
import { useModalStore } from "@/stores/useModalStore";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { createSchema } from "../schemas/userValidation";

interface IFormInput {
  name: string;
  job: string;
}

const CreateUserModal: React.FC = () => {
  const { isModalOpen, onClose } = useModalStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({
    resolver: zodResolver(createSchema),
  });

  const handleClose = () => {
    onClose();
    reset();
  };

  const { mutate: createUser } = useCreateUser();

  const onSubmit = (data: IFormInput) => {
    createUser(data);
    handleClose();
  };

  if (!isModalOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div className={styles.modal} onClick={handleClose}>
        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              required
              {...register("name", { required: true })}
              className={errors.name ? styles.inputError : ""}
              placeholder="Name"
              type="text"
            />
            {errors.name && <span className={styles.errorMessage}>{errors.name.message}</span>}
            <input
              required
              className={errors.job ? styles.inputError : ""}
              {...register("job", { required: true })}
              placeholder="Job"
              type="text"
            />
            {errors.job && <span className={styles.errorMessage}>{errors.job.message}</span>}
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
