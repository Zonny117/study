import { useState, useEffect } from 'react'
import { MainMenuList } from '../models/mainmenu'
import axios from 'axios'
import { BASE_URL } from '../global/constants'
import styled from 'styled-components'

const Img = styled.img`
  width: 350px;
  height: 500px;
  object-fit: cover;
`

function MainMenuComponent(props: { id: number }) {
  const [menuList, setMenuList] = useState<MainMenuList[]>([])

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${BASE_URL}catalog/v1/tag/${props.id}/rec`)
        .then(res => {
          const data = res.data.map((item: MainMenuList) =>
            MainMenuList.formJson(item)
          )
          setMenuList(data)
        })
        .catch(err => console.log(err))
    }

    fetchData()
  }, [props.id])

  return (
    <div className="content">
      {menuList.map(item => (
        <Img key={item.id} src={BASE_URL + item.thumbnail} alt="이미지"></Img>
      ))}
    </div>
  )
}

export default MainMenuComponent
