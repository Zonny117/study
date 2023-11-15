import styled from 'styled-components';

type ContentData = {
  title: string;
  text?: string;
};

const Wrapper = styled.div`
  margin-bottom: 50px;

  & p.title {
    font-weight: bold;
    text-align: center;
    font-size: 18px;
    margin-bottom: 20px;
  }

  & p.text {
  }
`;

function EditableContent({ title, text }: ContentData) {
  return (
    <Wrapper>
      <p className="title">{title}</p>
      {text ? <p className="text">{text}</p> : null}
    </Wrapper>
  );
}

export default EditableContent;
