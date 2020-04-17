import rightContentRender from './components/GlobalHeader/RightContent';

interface User {
    name : string;
    useid: number;
}

export interface Initial {
    user: User
}

export const getInitialState = async ():Promise<Initial> => {

    const user:User = {
        name  :'wangxiao',
        useid : 123456
    }

    return {user}
    
}

export const layout = { 
    logout: () => {},
    rightContentRender
}