import React, { useState, useEffect } from 'react';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { PaginationConfig } from 'antd/es/pagination';
import { history, useLocation } from 'umi';
import { useUpdateEffect } from '@umijs/hooks';
import emitter, { targetStoreEvent } from '@/utils/ev.ts';
import {
  getTargetStoreItems,
  TargetStoreItem,
  TargetStoreParam,
} from '@/utils/api/service';
import './index.scss';

const columns: ProColumns<TargetStoreItem>[] = [
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
    filters: undefined,
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
];

export default () => {
  const { query } = useLocation() as any;
  const iniKeyword: string = query['keyword'] || '';
  const iniCurrent: number = +query['page_current'] || 1;
  const iniPageSize: number = +query['page_size'] || 20;
  const [keyword, setKeyword] = useState(iniKeyword);
  const [pageQuery, setPageQuery] = useState({
    pageSize: iniPageSize,
    current: iniCurrent,
  });

  useUpdateEffect(() => {
    console.log('点击了搜索按钮改值');

    //此生命周期函数只会在keyword变更的时候执行（且组件首次挂载并不会执行）
    //搜索之后重置分页参数
    setPageQuery({
      ...pageQuery,
      current: 1,
    });

    history.push({
      query: {
        keyword: keyword === '' ? undefined : keyword,
      },
    });
  }, [keyword]);

  useEffect(() => {
    //监听点击搜索事件在这里进行首次添加
    console.log('挂载监听事件');
    emitter.on(targetStoreEvent, form => {
      console.log('form', form);
      setKeyword(form.keyword);
    });

    return () => {
      //卸载组件后需要注销上面的监听事件
      console.log('注销监听事件');
      emitter.removeAllListeners(targetStoreEvent);
    };
  }, []);

  const onSearch = async (params = {} as TargetStoreParam) => {
    console.log('请求了');

    if (keyword === '') {
      delete params.keyword;
    }

    let { data, total } = await getTargetStoreItems({
      ...params,
    });

    return {
      data,
      total,
    };
  };

  const onChange = (pagination: PaginationConfig) => {
    let { current, pageSize } = pagination;

    if (current != undefined && pageSize != undefined) {
      setPageQuery({
        current,
        pageSize,
      });
    }

    history.push({
      query: {
        keyword: keyword === '' ? undefined : keyword,
        page_current: current,
        page_size: pageSize,
      },
    });
  };

  return (
    <>
      <ProTable<TargetStoreItem, TargetStoreParam>
        params={{ keyword, ...pageQuery }}
        columns={columns}
        options={false}
        search={false}
        request={onSearch}
        rowKey="id"
        onChange={onChange}
        pagination={{
          ...pageQuery,
        }}
      />
    </>
  );
};
