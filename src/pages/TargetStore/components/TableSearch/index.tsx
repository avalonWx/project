import React, { useState } from 'react';
import { Form, Row, Col, Input, Button, Card, Tag } from 'antd';
import { useLocation } from 'umi';
import emitter, { targetStoreEvent } from '@/utils/ev.ts';

export default () => {
  const [form] = Form.useForm();
  const { query } = useLocation() as any;
  const iniKeyword: string = query['keyword'] || '';
  const onFinish = (values: any) => {
    emitter.emit(targetStoreEvent, values);
  };

  return (
    <>
      <Card bodyStyle={{ padding: '24px 24px 0 24px' }}>
        <Form
          initialValues={{ keyword: iniKeyword }}
          form={form}
          name="advanced_search"
          onFinish={onFinish}
        >
          <Row gutter={24} justify="space-between">
            <Col xs={24} sm={18} md={16} lg={14} xl={10}>
              <Form.Item name="keyword" label="指标名称">
                <Input placeholder="请输入搜索关键字" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={6} md={6} lg={6} xl={6}>
              <Form.Item>
                <div className="align-right">
                  <Button type="primary" htmlType="submit">
                    搜索
                  </Button>
                </div>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Item label="常用搜索">
                <Tag color="processing">学历</Tag>
                <Tag color="processing">部门经历</Tag>
                <Tag color="processing">奖惩</Tag>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </>
  );
};
