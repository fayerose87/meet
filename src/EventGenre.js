import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './App.css';

const EventGenre = ({ events }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(() => getData());
  }, [events]);

  const getData = () => {

    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
    const data = genres.map((genre) => {
      const value = events.filter(({ summary }) =>
        summary.split(' ').includes(genre)).length;
      return { name: genre, value };
    });
    return data;
  };

  const COLORS = ['#ff9900', '#1ae7ff', '#c90076', '#2d7566', '#fed96d'];


  return (
    <ResponsiveContainer height={400} >
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        label={({name, percent})=> `${name} ${(percent * 100).toFixed(0)}%`}
      >
        {
          data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} name={entry.name}/>)
        }
      </Pie>
    </PieChart>
    </ResponsiveContainer>
  );
}

export default EventGenre;
