import React from 'react';
import { Space } from 'antd';
import { useEventEmitter } from '@umijs/hooks';
import TableList from './components/TableList';
import TableSearch from './components/TableSearch';

export default () => {
  const search$ = useEventEmitter();

  return (
    <Space direction="vertical" size={20} style={{ width: '100%' }}>
      <TableSearch />
      <TableList />
    </Space>
  );
};
