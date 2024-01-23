import { FocusedTodoType, ModalType } from '@/types';
import { Button, ModalBody, ModalFooter, ModalHeader } from '@nextui-org/react';

function CustomModal({
  modalStatus,
  onClose,
}: {
  modalStatus: FocusedTodoType;
  onClose: VoidFunction;
}) {
  if (modalStatus.modalType === 'delete') {
    return (
      <>
        <ModalHeader className="flex flex-col gap-1"></ModalHeader>
        <ModalBody>
          <p>삭제 모달</p>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose}>
            Close
          </Button>
          <Button color="primary" onPress={onClose}>
            Action
          </Button>
        </ModalFooter>
      </>
    );
  } else if (modalStatus.modalType === 'detail') {
    return (
      <>
        <ModalHeader className="flex flex-col gap-1"></ModalHeader>
        <ModalBody>
          <p>상세 모달</p>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose}>
            Close
          </Button>
          <Button color="primary" onPress={onClose}>
            Action
          </Button>
        </ModalFooter>
      </>
    );
  } else if (modalStatus.modalType === 'edit') {
    return (
      <>
        <ModalHeader className="flex flex-col gap-1"></ModalHeader>
        <ModalBody>
          <p>수정 모달</p>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose}>
            Close
          </Button>
          <Button color="primary" onPress={onClose}>
            Action
          </Button>
        </ModalFooter>
      </>
    );
  }
}

export default CustomModal;
