# React App

Este projeto foi construído com a versão mais recente do React (18.2.0), aproveitando as funcionalidades e melhorias mais atuais dessa biblioteca. Para obter mais informações sobre o React e aprender como desenvolver um aplicativo utilizando esta ferramenta, consulte a documentação oficial e os recursos de aprendizagem disponíveis.

[Create React App](https://github.com/facebook/create-react-app).

## Executanto o projeto

Para configurar corretamente o ambiente do projeto, é necessário adicionar um arquivo `.env` na raiz do diretório. Dentro deste arquivo, inclua a variável que especifica a URL e a porta utilizadas pelo backend, garantindo assim a comunicação adequada entre os serviços.

```
REACT_APP_API_BASE_URL=http://localhost:3001
```

Para utilizar os ícones de openweathermap é necessário adicionar no .env a url para o mesmo seguindo o exemplo abaixo.
```
REACT_APP_ICON_URL=https://openweathermap.org/img/wn/
```



Após incluir o arquivo executar a instalação utilizando o comando `npm install`
Abra o endereço [http://localhost:3000](http://localhost:3000) no navegador para ver a página em funcionamento em modo de **desenvolvimento**