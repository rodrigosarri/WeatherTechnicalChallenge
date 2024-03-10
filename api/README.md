# Projeto de Previsão do Tempo

Este projeto utiliza o Django REST framework para criar uma API que retorna informações de tempo para o frontend. O Django REST framework é um toolkit poderoso e flexível para construir APIs Web. Para mais informações, visite a [documentação oficial do Django REST framework](https://www.django-rest-framework.org/).

## Pré-requisitos

Antes de iniciar, certifique-se de ter o Python e o pip instalados. Este projeto é compatível com as versões:

- Python 3.6
- Python 3.7
- Python 3.8
- Python 3.9
- Python 3.10
- Python 3.11

## Configuração do Ambiente

Para configurar o ambiente de desenvolvimento, siga os passos abaixo:

## **Criação do Ambiente Virtual**

   Execute o seguinte comando para criar um ambiente virtual:

   ```bash
   python -m venv env
   ```

Ativação do Ambiente Virtual para Linux:
```
source env/bin/activate
```


Ativação do Ambiente Virtual para Windows:
```
env\Scripts\activate
```

## Instalação das Dependências
Com o ambiente virtual ativado, instale as dependências necessárias executando:

```
pip install -r requirements.txt
```

## Configuração de Variável de Ambiente

Para integrar a aplicação com a API do OpenWeatherMap e acessar dados meteorológicos em tempo real, é necessário adicionar uma chave de API como variável de ambiente. Siga os passos abaixo para configurar corretamente:

Obtenha sua Chave de API do OpenWeatherMap: Acesse o site oficial do OpenWeatherMap em https://home.openweathermap.org/ e crie uma conta ou faça login caso já possua uma. Após acessar sua conta, navegue até a seção de chaves de API e crie uma nova chave API para sua aplicação.

Criação do Arquivo .env: No diretório raiz do seu projeto, crie um arquivo denominado `.env`. Este arquivo será utilizado para armazenar variáveis de ambiente de forma segura.

Adicionar a Chave de API ao Arquivo .env: substituindo SUA_CHAVE_AQUI pela chave de API obtida no passo 1:

.env
```
OPENWEATHERMAP_API_KEY=SUA_CHAVE_AQUI
```

## Modo de desenvolvedor
Para habilitar o modo de desenvolvedor no projeto, é necessário incluir a variável DRF_DEVELOPMENT_MODE=True no arquivo .env, garantindo assim a ativação dessa configuração.

.env
```
DRF_DEVELOPMENT_MODE=True
```

## Configuração do Projeto

Criação de migrations

```
python manage.py makemigrations api
```

Aplicação das Migrações
```
python manage.py migrate
```

### Execução

Para rodar o projeto em modo de desenvolvimento, utilize o comando:

```
python manage.py runserver
```

Agora, o servidor estará rodando e você poderá acessar a API conforme configurado em seu projeto Django REST framework.

O endereço padrão está disponível em: http://127.0.0.1:8000

## Postman Collection

Abaixo disponibilizo para download a coleção para importação no Postman com todos os endpoints.

[Weather API Postman Collection](https://github.com/rodrigosarri/WeatherTechnicalChallenge/blob/main/api/WeatherFlowAPI.postman_collection.json)