import styled from 'styled-components';
import { useState } from 'react';

const potrace = require('potrace');

const H1 = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 32px;
  margin-top: 20px;
`;

function Potrace() {
  const [svg, setSvg] = useState<string>('');
  const [svgWidth, setSvgWidth] = useState<number>(0);
  const [svgHeight, setSvgHeight] = useState<number>(0);
  const [color, setColor] = useState<string>('black');

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const path = URL.createObjectURL(e.target.files[0]);

      const image = new Image();
      image.src = path;

      image.onload = () => {
        const trace = new potrace.Potrace();

        trace.loadImage(path, (err: any) => {
          if (err) throw err;

          trace.setParameters({
            threshold: 128,
            blackOnWhite: false,
            background: color,
          });

          const convertedImg: string = trace.getSVG();

          setSvg(convertedImg);
          setSvgWidth(image.width);
          setSvgHeight(image.height);
          e.target.value = '';
        });
      };
    }
  };

  const onChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const downloadSvg = () => {
    if (svg) {
      const blob = new Blob([svg], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);

      // 다운로드 링크 생성
      const a = document.createElement('a');
      a.href = url;
      a.download = 'image.svg'; // 다운로드되는 파일의 이름 설정
      //   document.body.appendChild(a);

      // 다운로드 실행
      a.click();

      // 사용이 끝난 URL 및 링크 삭제
      URL.revokeObjectURL(url);
    }
  };

  return (
    <>
      <H1>리액트 이미지 컨버터 테스트</H1>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={onChange} accept="image/*" />
        <input type="color" onChange={onChangeColor} />
      </form>
      {svg && svgWidth && svgHeight && (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={svgWidth.toString()}
            height={svgHeight.toString()}
          >
            <g dangerouslySetInnerHTML={{ __html: svg }} />
          </svg>
          <button onClick={downloadSvg}>다운로드</button>
        </>
      )}
    </>
  );
}

export default Potrace;
