import React from 'react';
import { Form, Row, Col, Input, Button, Card ,Tag, Space } from 'antd';
import TableList from './components/TableList';


export default () => {

	const [form] = Form.useForm();

	const onFinish = (values: any) => {
		console.log('Received values of form: ', values);
	}

	return (
		<>
		<Space direction="vertical" size={20} style={{width : '100%'}}>
			<Card
				bodyStyle={{padding:'24px 24px 0 24px'}}
			>
				<Form
					form={form}
					name="advanced_search"
					onFinish={onFinish}
				>
					<Row gutter={24} justify="space-between">
						<Col xs={24} sm={18} md={16} lg={14} xl={10}>
							<Form.Item
								name = "keywords"
								label= "指标名称"
							>
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
							<Form.Item
								label= "常用搜索"
							>
								<Tag color="processing">学历</Tag>
								<Tag color="processing">部门经历</Tag>
								<Tag color="processing">奖惩</Tag>
							</Form.Item>
						</Col>
					</Row>
				</Form>
			</Card>
			<TableList />
			</Space>
		</>
	);
}
