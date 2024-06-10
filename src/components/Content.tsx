import useModal from "../hooks/useModal";
import AuthModal from "./AuthModal";

const Content = () => {
  const authModalProps = useModal();

  return (
    <div className="main">
      <div>
        <h1>Some cool content here.</h1>
        <button onClick={authModalProps.onOpen}>Open modal!</button>
      </div>

      <AuthModal {...authModalProps} />
    </div>
  );
};

export default Content;
