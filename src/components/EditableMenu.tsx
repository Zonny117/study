import styled from 'styled-components';

type EditableCompType = {
  title: string;
};

const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 322px;
  padding: 14px 25px;
  box-sizing: border-box;
  border: 1px solid #86868b;
  border-radius: 10px;

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

function EditableMenu({ title }: EditableCompType) {
  return (
    <List>
      <span className="title">{title}</span>
      <span onClick={onClick}>수정하기</span>
    </List>
  );
}

export default EditableMenu;
