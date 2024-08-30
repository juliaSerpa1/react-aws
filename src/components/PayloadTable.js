import React from 'react';
import useDynamoData from '../hooks/useDynamoData';
import '../styles/payload.css';

const PayloadTable = () => {
  const { data, loading, error } = useDynamoData();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (data.length === 0) return <p>No data available.</p>;

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(data[0] || {}).map(key => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            {Object.values(item).map(value => (
              <td key={value}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PayloadTable;