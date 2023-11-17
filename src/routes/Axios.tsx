import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MainMenu } from '../models/mainmenu';
import { BASE_URL } from '../global/constants';
import MainMenuComponent from '../components/MainMenuList';

const H1 = styled.h1`
  font-weight: bold;
  font-size: 32px;
  text-align: center;
  margin: 50px auto;
`;

const Ul = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;

  & > li {
    width: 100%;
    overflow: hidden;
  }

  & .title {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 20px;
  }

  & .content {
    display: flex;
    gap: 10px;
    height: 500px;
  }

  & .imgbx {
    width: 100%;
    overflow-x: auto;
  }
`;

function AxiosTest() {
  // menu state의 타입을 MainMenu 인스턴스의 배열로 지정, 이래야 자동완성 쓸 수 있음
  const [menu, setMenu] = useState<MainMenu[]>([]);

  const fetch = async () => {
    await axios
      .get(`${BASE_URL}/home/v1/main/`)
      .then(res => {
        // axios로 받은 데이터로 MainMenu 인스턴스를 생성
        const mainMenu = res.data.map(
          // 매개변수의 타입은 MainMenu 인스턴스, 인스턴스를 리턴하기 때문
          (item: MainMenu) => new MainMenu(item.id, item.name, item.sequence)
        );

        setMenu(mainMenu);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <H1>리액트 Axios 테스트</H1>
      <Ul>
        {menu.map(item => (
          <li key={item.id}>
            <div className="title">{item.name}</div>
            {/* 컴포넌트에 프롭스를 전달해서 각 메뉴 아이디에 해당하는 리스트를 불러올 수 있게 함 */}
            <div className="imgbx">
              <MainMenuComponent id={item.id}></MainMenuComponent>
            </div>
          </li>
        ))}
      </Ul>
    </>
  );
}

export default AxiosTest;
