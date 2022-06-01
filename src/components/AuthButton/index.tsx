import React, { FC, useState, useEffect } from 'react';
import { Button, ButtonProps, message } from 'antd'
import classNames from 'classNames'
import styles from './styles.module.less'
import { getUserRole, UserRoleType } from 'apis/user'

type Props = ButtonProps

const mapper: Record<UserRoleType, string> = {
    user: 'plain user',
    admin: 'admin user'
}

const AuthButton: FC<Props> = (props) => {
    const { children, className, ...restProps } = props;

    const [userType, setUserType] = useState<UserRoleType>();

    const getLoginState = async () => {
        const res = await getUserRole();
        setUserType(res.data.userType);
    }

    useEffect(() => {
        getLoginState()
        .catch((error) => message.error(error))
    }, [])

    return (
        <Button {...restProps} className={classNames(className, styles.authButton)}>
            {mapper[userType!] ? mapper[userType!] + ',' : ''} 
            {children}
        </Button>
    )
}

export default AuthButton