// source: https://levelup.gitconnected.com/how-to-build-a-generic-reusable-synchronous-like-confirmation-dialog-in-react-js-71e32dfa495c

import { useConfirmationModalContext } from "../Containers/ModalContextContainer";

export default function DeleteButton(props) {
  const modalContext = useConfirmationModalContext();

  const handleOnClick = async () => {
    const result = await modalContext.showConfirmation();
    result && props.onClick();
  };

  return (
    <button className={props.className} onClick={handleOnClick}>
      {props.children}
    </button>
  );
}
