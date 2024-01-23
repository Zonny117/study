'use client';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Spinner,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  useDisclosure,
  Modal,
  ModalContent,
} from '@nextui-org/react';
import { FocusedTodoType, ModalType, Todo } from '@/types';
import { useRouter } from 'next/navigation';
import { VerticalDotsIcon } from './icons';
import CustomModal from './custom_modal';

export default function TodosTable({ todos }: { todos: Todo[] }) {
  const router = useRouter();
  const [todoAddEnable, setTodoAddEnable] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modalStatus, setModalStatus] = useState<FocusedTodoType>({
    focusedTodo: null,
    modalType: 'detail',
  });
  const notify = (msg: string) => toast.success(msg);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const ModalComponent = () => {
    return (
      <div>
        <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {onClose => (
              <CustomModal modalStatus={modalStatus} onClose={onClose} />
            )}
          </ModalContent>
        </Modal>
      </div>
    );
  };

  const addATodoHandler = async () => {
    setIsLoading(true);
    await new Promise(f => setTimeout(f, 600));
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/`, {
      method: 'POST',
      body: JSON.stringify({ title: inputValue }),
      cache: 'no-store',
    })
      .then(res => {
        if (res.status === 201) {
          router.refresh();
          setInputValue('');
          notify('임무가 추가됐음');
          setTodoAddEnable(false);
        } else {
          alert('post 오류');
        }
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value === '') {
      setTodoAddEnable(false);
    } else {
      setTodoAddEnable(true);
    }
    setInputValue(value);
  };

  const TodoRow = (aTodo: Todo) => {
    return (
      <TableRow key={aTodo.id}>
        <TableCell>{aTodo.id.slice(0, 4)}</TableCell>
        <TableCell>{aTodo.title}</TableCell>
        <TableCell>{aTodo.is_done ? '✅' : '❌'}</TableCell>
        <TableCell>{aTodo.created_at.toString()}</TableCell>
        <TableCell>
          {' '}
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-300" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="드랍메뉴"
                onAction={key => {
                  setModalStatus({
                    focusedTodo: aTodo,
                    modalType: key as ModalType,
                  });
                  onOpen();
                }}
              >
                <DropdownItem aria-label="상세보기" key="detail">
                  상세보기
                </DropdownItem>
                <DropdownItem aria-label="수정" key="update">
                  수정
                </DropdownItem>
                <DropdownItem aria-label="삭제" key="delete">
                  삭제
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </TableCell>
      </TableRow>
    );
  };

  return (
    <div className="flex flex-col space-y-4">
      <ModalComponent />
      <ToastContainer autoClose={1800} theme="dark" />
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input
          type="text"
          label="임무추가"
          onChange={onChange}
          value={inputValue}
        />
        {todoAddEnable ? (
          <>
            <Button className="h-14" color="warning" onPress={addATodoHandler}>
              추가
            </Button>
          </>
        ) : (
          <Popover placement="top" showArrow={true}>
            <PopoverTrigger>
              <Button className="h-14" color="default">
                추가
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="flex items-center justify-center px-1 py-2">
                <div className="text-small font-bold">🔥</div>
                <div className="text-tiny">임무를 입력하시오.</div>
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>
      <div>{isLoading ? <Spinner color="warning" size="sm" /> : null}</div>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>아이디</TableColumn>
          <TableColumn>할일내용</TableColumn>
          <TableColumn>완료여부</TableColumn>
          <TableColumn>생성일</TableColumn>
          <TableColumn>액션</TableColumn>
        </TableHeader>
        <TableBody emptyContent={'아무것도 없어요'}>
          {todos &&
            todos.map((todo: Todo) => {
              return TodoRow(todo);
            })}
        </TableBody>
      </Table>
    </div>
  );
}
