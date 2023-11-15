import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from '@hello-pangea/dnd';
import '../css/dnd.css';
import { useRef, useState } from 'react';
import { editCompData } from '../models/EditCompData';
import EditableMenu from '../components/EditableMenu';
import EditableContent from '../components/EditableContent';

function Dnd() {
  const [list, setList] = useState(editCompData);
  const editContent = useRef<HTMLDivElement>(null);

  // 드래그가 끝났을때 이벤트
  const onDragEnd = (result: DropResult) => {
    /* 
        드래그 앤 드랍의 결과를 반영하기 위해선 드래그 종료 이벤트에 배열을 업데이트해야한다.
        
        또한, 드랍된 위치는 destination에 찍히는데, 제자리에 드랍할 경우 null 값이 반환된다.
        따라서 null 값이 아닐때만 이벤트 코드를 실행한다.
      */
    if (!result.destination) return;

    // 데이터를 배열로 담는다.
    const items = Array.from(list);
    /* 
        source에는 배열 내 선택된 데이터에 대한 정보를 제공한다.
        여기서는 선택된 데이터의 배열 내 순번을 받아 배열에서 잘라낸다.
      */
    const [reorderedItem] = items.splice(result.source.index, 1);
    // 위에서 받은 잘라낸 데이터를 배열 내 드랍된 위치에 배치한다.
    items.splice(result.destination.index, 0, reorderedItem);
    // 스테이트 업뎃
    setList(items);
  };

  const listOnClick = (index: number) => {
    const { current } = editContent;

    if (current) {
      // 부모 요소에서 자식 요소들을 가져오기
      const children = Array.from(current.children);

      // 다른 형제 요소들에서 'on' 클래스 제거
      children.forEach((item, idx) => {
        if (idx !== index) {
          item.classList.remove('on');
        }
      });

      // 선택한 요소에 'on' 클래스 추가
      current.children[index].classList.add('on');
    }
  };

  const removeListOnClass = () => {
    const { current } = editContent;

    if (current) {
      const children = Array.from(current.children);
      children.forEach(item => {
        item.classList.remove('on');
      });
    }
  };

  return (
    <div className="wrapper">
      <div className="lbx">
        <div className="phone">
          <div className="fixed_area">
            <img src={require('../assets/images/logo.png')} alt="로고" />
            <p>디바이언스 추봉광</p>
            <iframe
              className="iframe"
              title="card"
              src="https://www.hiduck.co.kr/media/Postbox/20231115/EXkDsV8cgAmpu9c3ZtCPz3/CoffyR4x4VNZfxYHzvspHT.html"
            ></iframe>
          </div>
          <div className="content" ref={editContent}>
            {list.map((item, index) => {
              return (
                <EditableContent
                  key={index}
                  title={item.title}
                  text={item.text}
                ></EditableContent>
              );
            })}
          </div>
        </div>
      </div>
      <div className="rbx">
        <p className="rbx_title">카드 만들기</p>
        {/* DragDropContext는 onDragEnd를 필수적으로 받으며, 드래그 앤 드랍의 최상위 wrapper다. */}
        <DragDropContext onDragEnd={onDragEnd}>
          {/* 
              Droppable은 드랍이 되는 영역을 지정한다. 
              droppableId를 요구하며, string 값을 받는다.
  
              함수를 리턴값으로 받으며,
              해당 함수의 패러미터를 통해 innerRef, 전개연산자로 droppableProps를
              드랍 영역이 될 요소에 지정한다.
  
              ref는 되도록이면, HTML 요소에 지정하는 것이 편하다.
              컴포넌트에 설정하면 fowardRef라는 함수를 또 호출하고 세팅해야하는 번거로움이 있다.
              이는 Draggable도 동일하다.
            */}
          <Droppable droppableId="droppable">
            {(dropProvided, snapshot) => (
              <ul
                ref={dropProvided.innerRef}
                {...dropProvided.droppableProps}
                style={
                  /* 
                    snapshot을 통해 특정 이벤트때 스타일을 주는 방법
                  */
                  snapshot.isDraggingOver
                    ? { outline: '1px dotted red' }
                    : { outline: 'none' }
                }
              >
                {list.map((item, index) => {
                  return (
                    /* 
                        Draggable은 드래그할 요소를 지정한다.
                        key, draggableId, index를 요구하며,
                        이중 draggableId는 string값을 받는다.
  
                        리턴값으로 함수를 받으며,
                        해당 함수의 패러미터를 통해 innerRef, 전개연산자로 dragHandleProps, draggableProps가 전부 설정되어야한다.
  
                        또한 마진과 같은 여백을 주고자 할 경우, 클래스를 직접 지정해서 여백을 설정해야 버그를 해결할 수 있다.
                      */
                    <Draggable
                      key={index}
                      draggableId={index.toString()}
                      index={index}
                    >
                      {(dragProvided, snapshot) => {
                        return (
                          <li
                            ref={dragProvided.innerRef}
                            {...dragProvided.dragHandleProps}
                            {...dragProvided.draggableProps}
                            className="mt30"
                            onMouseOver={() => {
                              listOnClick(index);
                            }}
                            onMouseLeave={removeListOnClass}
                          >
                            <EditableMenu
                              title={item.title}
                              /* 
                                snapshot 패러미터를 통해 특정 이벤트에 따라 스타일 설정을 따로 줄 수 있다.
                                아래는 자식 컴포넌트에 isDragging 값을 전달하여 드래그를 하고 있는 동안에 스타일을 따로 설정하고 있다.
                              */
                              snapshot={snapshot.isDragging}
                            />
                          </li>
                        );
                      }}
                    </Draggable>
                  );
                })}
                {/* 
                    placeholder도 Drappable의 패러미터 속성 중 하나이며, 드랍 공간을 자동으로 설정해준다.
                    따라서 필수적으로 세팅해줘야 한다.
                    Draggble의 바깥에 세팅한다.
                  */}
                {dropProvided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

export default Dnd;
