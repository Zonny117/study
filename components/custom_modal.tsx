import { FocusedTodoType } from '@/types';
import {
  Button,
  Input,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Spinner,
  Switch,
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';

type PropType = {
  modalStatus: FocusedTodoType;
  onClose: VoidFunction;
};

function CustomModal({ modalStatus, onClose }: PropType) {
  const router = useRouter();
  const notify = (msg: string) => toast.success(msg);
  const [isDone, setIsDone] = useState<boolean>(
    modalStatus.focusedTodo!.is_done
  );
  const [updateInput, setUpdateInput] = useState<string>(
    modalStatus.focusedTodo!.title
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const modifyTodo = async (id: string, type: string) => {
    setIsLoading(false);

    switch (type.toUpperCase()) {
      case 'UPDATE':
        await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/${id}`, {
          method: 'POST',
          body: JSON.stringify({
            title: updateInput,
            is_done: isDone,
          }),
        })
          .then(res => {
            router.refresh();
            onClose();
            setIsLoading(true);
            notify('임무를 수정했음');
          })
          .catch(err => {
            console.log(err);
          });
        break;
      case 'DELETE':
        await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/${id}`, {
          method: 'DELETE',
        })
          .then(res => {
            router.refresh();
            onClose();
            setIsLoading(true);
            notify('임무를 삭제했음');
          })
          .catch(err => {
            console.log(err);
          });
        break;
      default:
        break;
    }
  };

  if (modalStatus.modalType === 'delete') {
    return (
      <>
        <ModalHeader className="flex flex-col gap-1"></ModalHeader>
        <ModalBody>
          <p>임무를 삭제하시겠습니까? 복구 안돼요.</p>
        </ModalBody>
        <ModalFooter>
          <Button
            color="danger"
            variant="light"
            onPress={() => {
              modifyTodo(modalStatus.focusedTodo!.id, 'DELETE');
            }}
          >
            {isLoading ? '삭제' : <Spinner color="warning" />}
          </Button>
          <Button color="default" onPress={onClose}>
            닫기
          </Button>
        </ModalFooter>
      </>
    );
  } else if (modalStatus.modalType === 'detail') {
    return (
      <>
        <ModalHeader className="flex flex-col gap-1"></ModalHeader>
        <ModalBody>
          <p className="flex flex-col space-y-4">
            <span>id: {modalStatus.focusedTodo!.id}</span>
            <span>임무: {modalStatus.focusedTodo!.title}</span>
            <span>완료여부: {modalStatus.focusedTodo!.is_done.toString()}</span>
            <span>
              생성일자: {modalStatus.focusedTodo!.created_at.toString()}
            </span>
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="default" variant="light" onPress={onClose}>
            닫기
          </Button>
          <Button color="success" onPress={onClose}>
            확인
          </Button>
        </ModalFooter>
      </>
    );
  } else if (modalStatus.modalType === 'update') {
    return (
      <>
        <ModalHeader className="flex flex-col gap-1">임무 수정</ModalHeader>
        <ModalBody>
          <div>
            <span className="font-bold">id : </span>
            {modalStatus.focusedTodo!.id}
          </div>
          <Input
            autoFocus
            label="임무 내용"
            placeholder="임무를 수정하시오"
            variant="bordered"
            defaultValue={modalStatus.focusedTodo!.title}
            value={updateInput}
            onValueChange={setUpdateInput}
            isRequired
          />
          <div className="flex items-center space-x-4">
            <span>입력된 임무 : {updateInput}</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="font-bold">완료여부 : </span>
            <Switch
              defaultSelected={isDone}
              aria-label="Automatic updates"
              onValueChange={setIsDone}
              color="warning"
            ></Switch>
            {isDone ? '완료' : '미완료'}
          </div>
          <div className="flex items-center space-x-3">
            <span className="font-bold">작성일 : </span>
            <span>{modalStatus.focusedTodo!.created_at.toLocaleString()}</span>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="warning"
            variant="flat"
            onPress={() => {
              modifyTodo(modalStatus.focusedTodo!.id, 'UPDATE');
            }}
          >
            {isLoading ? '수정' : <Spinner color="white" />}
          </Button>
          <Button color="default" onPress={onClose}>
            닫기
          </Button>
        </ModalFooter>
      </>
    );
  }
}

export default CustomModal;
