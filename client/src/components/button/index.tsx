import React from 'react';
import * as S from './styles';

function Button({ children, ...rest }: any) {
    return (
        <S.Container {...rest}>
            {children}
        </S.Container>
    )
}

export default Button;