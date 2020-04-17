import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

export default (props: any) => {
    return (
		<>
			<PageHeaderWrapper />
			<div style={{ padding: 20 }}>
				{ props.children }
			</div>
		</>
    )
  }
