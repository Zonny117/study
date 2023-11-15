import styled from 'styled-components';

type EditableCompType = {
  title: string;
  snapshot: boolean;
};

const List = styled.div<{ $snapshot: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 322px;
  padding: 14px 25px;
  box-sizing: border-box;
  border: 1.5px solid #86868b;
  border-color: ${props => (props.$snapshot ? '#5c47fd' : '#86868b')};
  border-radius: 10px;
  background-color: #fff;

  & span {
    display: inline-block;
    color: blue;
  }

  & span.title {
    font-weight: bold;
    color: #000;
  }
`;

const onClick = (e: React.MouseEvent<HTMLSpanElement>) => {
  console.log(e.target);
};

function EditableMenu({ title, snapshot }: EditableCompType) {
  return (
    <List $snapshot={snapshot}>
      <span className="title">{title}</span>
      <span onClick={onClick}>수정하기</span>
    </List>
  );
}

export default EditableMenu;
