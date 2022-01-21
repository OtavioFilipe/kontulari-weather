import React, { useRef, useState } from 'react';
import Box from './components/box';
import Button from './components/button';
import Input from './components/input';
import Layout from './components/layout';
import { H1, Header } from './components/layout/styles';
import instance from './services/api';

function App() {

  const inputRef: any = useRef();
  const [data, setData]: any = useState();

  async function handleSubmit() {
    try {
      const { data } = await instance.get(`/?location=${inputRef.current.value}`)
      setData(data);
      console.log(data);


    } catch (error) {
      alert('Não foi possivel realizar o get!')
    }
  }

  return (
    <Layout>
      <Header>
        <H1>Insira aqui a cidade:</H1>
      </Header>
      <input type="text" ref={inputRef} />
      <Button onClick={() => handleSubmit()}>Enviar</Button>
      {data && <H1>Cidade: {data.title}</H1>}
      {data && <Box data={data} />}
    </Layout>
  );
}

export default App;
