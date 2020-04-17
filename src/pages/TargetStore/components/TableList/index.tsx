import React from 'react';
import './index.scss';
import ProTable, { ProColumns } from '@ant-design/pro-table';

interface TargetItem {
    name : string;
    status: string;
    id   : number;
}

const columns: ProColumns<TargetItem>[] = [
    {
        title: '序号',
        dataIndex: 'index',
        hideInSearch: true,
        valueType: 'index',
        width: 100,
        align: 'center',
    },
    {
        title: '指标名称',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
    },
    {
        title: '状态',
        dataIndex: 'status',
        hideInSearch: true,
        align: 'center',
        initialValue: 'all',
        filters:undefined,
        valueEnum: {
            all: { text: '全部', status: 'Default' },
            effective: {
              text: '有效',
              status: 'Success',
            },
            invalid: {
              text: '无效',
              status: 'Error',
            },
        },
    },
]

export default () => {
    return (
        <>
            <ProTable<TargetItem>
                columns={columns}
                options={false}
                search={false}
                request={async () => {
                    let data = [{
                            id  : 1,
                            name: '学历',
                            status: true ? 'effective' : 'invalid'
                        },
                        {
                            id  : 2,
                            name: '部门经历',
                            status: true ? 'effective' : 'invalid'
                        },
                        {
                            id  : 3,
                            name: '项目经历',
                            status: true ? 'invalid' : 'effective'
                        },
                        {
                            id  : 4,
                            name: '绩效',
                            status: true ? 'invalid' : 'effective'
                        }]
                    return {
                      data,
                      page: 1,
                      success: true,
                      total: 100,
                    };
                }}
                rowKey="id"
            />
        </>
    )
}