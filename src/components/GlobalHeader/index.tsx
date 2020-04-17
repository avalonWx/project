import React from 'react';
import { BasicLayoutProps } from '@ant-design/pro-layout';
import RightContent from './RightContent';

const rightContent:React.FC<BasicLayoutProps> = (props) => {
	return (
		<>
            <div className="ant-pro-global-header">
                <RightContent />
            </div>
		</>
	);
}

export default rightContent
