#   :computer: api-numbers-test - Testes na Api

Cenários de teste na API

## Pré-requisitos para rodar os testes
Para rodar os testes, você precisará ter o Node.js instalado na sua máquina.

### Node

* <b>Instalação do Node no Windows</b>
Acesse a página oficial do Node.js (https://nodejs.org) e baixe o instalador. Tenha certeza também que tem o git disponível no seu PATH, você também pode precisar do npm.

* <b>Instalação do Node no Ubuntu</b>
Você pode instalar facilmente o nodejs e o npm com um apt install, basta seguir os seguintes comandos. $ sudo apt install nodejs $ sudo apt install npm

* <b>Outros sistemas operacionais</b>
Você pode achar mais informações sobre a instalação no site oficial do Node.js (https://nodejs.org/) e no site oficial do NPM.

Para verificar que a instalação foi feita com sucesso, você pode seguir os seguintes comandos. 

   ```bash
$ node --version

$ npm --version
  ```
  
## Clonando o projeto
Para clonar o projeto, basta criar uma pasta no seu computador, acessá-la pelo terminal e utilizar o seguinte comando.

   ```bash
$ git clone git@github.com:anaschramm/api-numbers-test.git
  ```

## Instalando o projeto
Para instalar o projeto na sua máquina, basta instalar todas as dependências presentes no arquivo package.json usando o seguinte comando no seu terminal.

  ```bash
$ npm install
  ```

## Instalando o Allure
O Allure foi utilizado para gerar relatórios de testes.

* <b>Instalação do Allure no Linux</b>
Para instalar basta rodar os três comandos no terminal.

   ```bash
$ sudo apt-add-repository ppa:qameta/allure
$ sudo apt-get update 
$ sudo apt-get install allure
  ```

* <b>Instalação do Allure no Windows</b>

1. Baixar a última versão do allure-commandline em formato zip no link https://search.maven.org/search?q=g:io.qameta.allure
2. Descompactar em uma pasta os arquivos do zip.
3. Navegar até a pasta bin.
4. E adicionar o diretório da pasta bin ao PATH das variáveis de ambiente.

OBS: Caso o projeto esteja aberto, é necessário reiniciá-lo.

* <b>Checar a instalação do Allure</b>

  ```bash
$ allure --version
  ```

## Rodando o projeto
Para rodar o projeto, basta utilizar os seguintes comandos.

1. Para rodar a etapa de testes
  ```bash
$ npm run test
  ```
2. Para gerar os relatórios no allure
  ```bash
$ npm run allure:report
  ```
3. Para limpar os arquivos gerados
  ```bash
$ npm run allure:clear
  ```