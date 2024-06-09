import { useForm } from "react-hook-form";

import Modal from "./Modal";

const AuthModal = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Modal {...props}>
      <Modal.Header />

      <form onSubmit={handleSubmit(onSubmit)}>
        {!!errors.username && <span className="error-msg">{errors.username.message}</span>}
        <input
          className="custom-input"
          {...register("username", { required: "Required field." })}
          placeholder="Username"
        />

        {!!errors.password && <span className="error-msg">{errors.password.message}</span>}
        <input
          className="custom-input"
          {...register("password", { required: "Required field." })}
          placeholder="Password"
          type="password"
        />

        <div className="checkbox-container">
          <input type="checkbox" id="checkbox1" {...register("keep_logged")} />
          <label htmlFor="checkbox1">Keep me logged in</label>
        </div>

        <button type="submit">Sign in</button>
      </form>
    </Modal>
  );
};

export default AuthModal;
