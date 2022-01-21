import React from 'react';
import * as S from './styles';

function Layout({ children }: any) {
    return (
        <S.Container>
            {children}
        </S.Container>
    )
}

export default Layout;