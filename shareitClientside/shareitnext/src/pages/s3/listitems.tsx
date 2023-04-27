// pages/getitems.tsx

import { useState, useEffect } from 'react';

interface S3File {
  key: string;
  size: number;
}

interface S3ListResponse {
  files: S3File[];
}

const getItems = async (bucketName: string): Promise<S3File[]> => {
  const response = await fetch('http://localhost/s3/list', {
    method: 'POST',
    body: JSON.stringify({ key: bucketName }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data: S3ListResponse = await response.json();
  return data.files;
};

const GetItemsPage = () => {
  const [items, setItems] = useState<S3File[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const files = await getItems('Bucketname');
      setItems(files);
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h1>All Items</h1>
      <table>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>File Name</th>
            <th>File Size</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.key}>
              <td>{index + 1}</td>
              <td>{item.key}</td>
              <td>{item.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetItemsPage;
