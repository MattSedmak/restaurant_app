import '../editModal/editModal.css';

interface IShowModalProps {
  show: boolean;
  hideModal: () => void;
}
const EditModal = (props: IShowModalProps) => {
  const showHideClassName = props.show
    ? 'modal display-block'
    : 'modal display-none';
  return (
    <div className={showHideClassName}>
      <div className='modal-main'>
        <p>Modal works</p>
        <button onClick={props.hideModal}>cancel</button>
      </div>
    </div>
  );
};

export default EditModal;
