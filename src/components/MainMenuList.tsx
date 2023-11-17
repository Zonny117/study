import { useState, useEffect } from 'react';
import { MainMenuList } from '../models/mainmenu';
import axios from 'axios';
import { BASE_URL } from '../global/constants';
import styled from 'styled-components';

// 타입이나 인터페이스는 관행적으로 대문자로 작명한다.
type Props = {
  id: Number;
};

const Img = styled.img`
  width: 350px;
  height: 500px;
  object-fit: cover;
`;

const suffle = (array: MainMenuList[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

function MainMenuComponent({ id }: Props) {
  const [menuList, setMenuList] = useState<MainMenuList[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${BASE_URL}/catalog/v1/tag/${id}/rec`)
        .then(res => {
          const data = res.data.map((item: MainMenuList) =>
            MainMenuList.fromJson(item)
          );
          setMenuList(suffle(data));
        })
        .catch(err => console.log(err));
    };

    fetchData();
  }, [id]);

  return (
    <div className="content">
      {menuList.map(item => (
        <Img key={item.id} src={BASE_URL + item.thumbnail} alt="이미지"></Img>
      ))}
    </div>
  );
}

export default MainMenuComponent;
