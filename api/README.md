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
   python3 -m venv env
   ```

Ativação do Ambiente Virtual para Linux:
```
source env/bin/activate`
```


Ativação do Ambiente Virtual para Windows:
```
env\Scripts\activate
```

## Instalação das Dependências
Com o ambiente virtual ativado, instale as dependências necessárias executando:

```
pip install django
pip install djangorestframework
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