import React from 'react';
import { Card, Alert, Space } from 'antd';
import ProTable, { ProColumns } from '@ant-design/pro-table';

export default () => {
  return (
    <>
      <Space direction="vertical" size={20} style={{ width: '100%' }}>
        <Card>
          <Alert
            message="指标名称：学历"
            description="用来定义学历类型、形式等"
            type="info"
            showIcon
          />
        </Card>
        <ProTable<any> options={false} search={false} rowKey="id" />
      </Space>
    </>
  );
};
