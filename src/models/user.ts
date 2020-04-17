import { useModel } from 'umi';
import { Initial } from '@/app';

export default () :Initial | undefined => {
	const { initialState } = useModel('@@initialState')
	return initialState
}