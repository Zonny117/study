import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from '@hello-pangea/dnd';
import '../css/dnd.css';

import { useState } from 'react';
import { editCompData } from '../models/EditCompData';
import EditableMenu from '../components/EditableMenu';

function Dnd() {
  const [list, setList] = useState(editCompData);

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

  return (
    <div className="wrapper">
      <div className="lbx"></div>
      <div className="rbx">
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
            {dropProvided => (
              <ul ref={dropProvided.innerRef} {...dropProvided.droppableProps}>
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
                      {dragProvided => {
                        return (
                          <li
                            ref={dragProvided.innerRef}
                            {...dragProvided.dragHandleProps}
                            {...dragProvided.draggableProps}
                            className="mt30"
                          >
                            <EditableMenu title={item.title} />
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
