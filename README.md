# Kontulari Weather: Desafio Técnico

Seja bem-vindo(a) à startup baiana de contabilidade online que está chegando no mercado para ser referência

A Kontulari está em desenvolvimento há dois anos e já tem clientes ativos! Foi criada por uma grande empresa de Contabilidade com mais de 12 anos no mercado. Queremos impactar a vida de micro e pequenos empresários, ajudando-os a organizar as finanças e a contabilidade de suas empresas de forma rápida, prática e completa, dando a eles mais organização e liberdade para tocarem seus negócios. Em breve estaremos atendendo todo Brasil

Se você gosta de desafios, aprender, tecnologia, inovação, trabalho em equipe e pesquisa, você está no lugar certo. Saiba mais sobre nós em: https://kontulari.com.br

Quer fazer parte desta jornada e nos ajudar a construir isso?

Vamos lá!

## O Desafio

Vamos dar uma olhada da previsão do tempo? Esse desafio tem como objetivo criar uma aplicação em **React.js**, usando JavaScript ou TypeScript, que consuma API que disponibilizamos no subdiretório `server` desse repositório, para mostrar ao usuário a previsão do tempo para uma ou várias localidades

Qualquer funcionalidade extra é bem-vinda para agregar na solução proposta. Mas lembre-se que iremos avaliar apenas o front-end neste desafio, dessa forma qualquer alteração no `server` não é necessária

O objetivo é exercer a criatividade, então não há exigências quanto às questões de layout, fiquem à vontade para nos surpreenderem como quiserem!

No entanto, iremos levar em conta alguns critérios de avaliação:

- Código bem escrito e limpo
- Layout responsivo
- Organização (clareza nos commits, aplicação das Metologias Ágeis)
- Quais ferramentas foram usadas, como e por quê
- Sua capacidade de documentação da aplicação
- Beleza e usabilidade (UI/UX)

Bônus:

- Cuidados especiais com otimização
- Testes de front-end
- Uso da biblioteca styled-components

## API

A API que disponibilizamos para o desafio é uma versão modificada da (https://www.metaweather.com/). Você deverá rodar o servidor em seu localhost, de acordo com a instruções postas abaixo. O servidor irá rodar na porta 8080, e possui um único endpoint, onde você deve passar como parâmetro a localidade que quer buscar dados de previsão do tempo

As localizações suportadas podem ser encontradas em: https://www.metaweather.com/map/ ou em [list.txt](https://github.com/kontulari/kontulari-weather/blob/master/server/list.txt)

URL com exemplo de parâmetro de localização:

`http://localhost:8080/?location=Salvador`

Exemplo de resposta entregue: https://www.metaweather.com/api/location/455826/

### Rodando a API

#### Requisitos

- Node.js (versão 14.17 ou superior)
- Git (versão 2.33 ou superior)
- Yarn (versão 1.22 ou superior)

Para começar, crie um fork desse projeto e em seguida, clone para um repositório local em sua máquina

No subdiretório `server`, rode o comando:

```bash
yarn
```
Isso irá baixar todas as dependências para necessárias para o lado do servidor. Em seguida, rode o comando abaixo, para efetivamente subir o servidor, que irá rodar em seu localhost, na porta 8080

```bash
yarn start
```
**Lembre-se de sempre deixar o servidor rodando enquanto estiver trabalhando no desafio**

Com tudo isso pronto, crie um diretório `client` na raiz projeto, onde ficará todo o seu front-end para o desafio

## Entrega

Antes do prazo limite (dia 21/01/2021, às 12h), você deve enviar uma Pull Request para esse repositório a partir do fork que você criou. Se foi um trabalho em equipe, lembre-se de listar de todas as pessoas que trabalharam no projeto

## Observações

**O código do projeto é seu**. Nós não utilizaremos nenhum código implementado nesse desafio técnico nos projetos internos da Kontulari

*Let's code!*
