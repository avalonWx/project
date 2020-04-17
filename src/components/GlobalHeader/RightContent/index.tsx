import React from 'react';
import './index.scss';
import { Badge } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Space, Avatar,Row,Col } from 'antd';


const menu = (
	<Menu>
		<Menu.Item>
			退出登录
		</Menu.Item>
	</Menu>
)

const RightContent = () => {
	return (
		<>
			<div className="header-right">
				<Row justify="space-between">
					<Col xs={0} sm={14}>
						<div className="title">
							<span>人岗匹配</span>
							<span>
								PERSON-POSIT<br/>
								MATCHING SYSTEM
							</span>             
						</div>
					</Col>
					<Col xs={24} sm={10}>
						<div className="align-right">
							<Space size="large">
								<Badge dot={true}>
									<span className="notice-action-icon">
										<BellOutlined />
									</span>
								</Badge>
						
								<Dropdown overlay={menu}>
									<div className="user-data">
										<Avatar src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" />
										<div>
											<span>wangxiao</span>
											<span>人事管理员</span>
										</div>
									</div>
								</Dropdown>
							</Space>
						</div>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default RightContent
