// @flow
import { FC } from 'react';
import data from '../../data.json'
interface ContentProps {}

const Content: FC<ContentProps> = ({}) => {
  return (
    <div className="flex flex-col justify-between">
      {data.INTRODUCTION.map((item, index) => (
        <div className="content flex flex-row gap-6" key={index}>
          <h1 className="text-xl font-semibold">{item.title}:</h1>
          <p className="text-lg font-extralight">{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Content;
