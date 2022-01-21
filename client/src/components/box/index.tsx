import React from 'react';
import * as S from './styles';

interface Props {
    consolidated_weather: [{
        id: number
        weather_state_name: string
        weather_state_abbr: string
        wind_direction_compass: string
        created: Date | string
        applicable_date: Date | string
        min_temp: number
        max_temp: number
        the_temp: number
        wind_speed: number
        wind_direction: number
        air_pressure: number
        humidity: number
        visibility: number
        predictability: number
    }]
}

function Box({ data }: any) {

    return (
        <S.Container>
            {data ? data?.consolidated_weather?.map((info: any) => (
                <S.Content key={info.id}>
                    <S.Label>{info.weather_state_name}</S.Label>
                    <S.Information>{info.the_temp.toFixed()}</S.Information>
                </S.Content>
            )) : null}
        </S.Container>
    );
}

export default Box;