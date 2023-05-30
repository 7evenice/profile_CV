// @flow
import { FC } from 'react';
import data from '../../data.json'
interface Item {
  title: string;
  content: string;
}
interface ContentProps {
  getID: string,
}
interface Data {
  [key: string]: Item[] | undefined; // Index signature cho phép truy cập vào các thuộc tính với giá trị kiểu 'string'
}

const Content: FC<ContentProps> = ({getID}) => {
  const TYPE_DATA = getID;
  const contentData = (data as Data)[TYPE_DATA]; // Sử dụng index signature trên data
  return (
    <div className="flex flex-col justify-center w-1/2 relative">
        <h1 className='absolute top-0 -translate-x-16 font-extrabold text-green-600'>{getID}</h1>
        {contentData &&
          contentData.map((item, index) => (
            <div className="content flex flex-row gap-6 border rounded-xl m-1 justify-center p-1 w-full" key={index}>
              <h1 className="text-xl font-semibold">{item.title}</h1>
              <p className="text-lg font-extralight">{item.content}</p>
            </div>
          ))}
    </div>
  );
};

export default Content;
