# Menu do Google - Componentes e Props em React

Este projeto é uma recriação do menu do Google utilizando componentes e props do React. O objetivo é mostrar como esses conceitos podem ser utilizados no desenvolvimento de interfaces de usuário em React.

## Recursos

- O menu do Google é dividido em diferentes componentes, permitindo um código modular e reutilizável.
- Props são utilizados para passar dados e funções entre os componentes.


## Requisitos

- Node.js (versão 12 ou superior)
- NPM (Node Package Manager)

## Instalação

1. Clone este repositório em sua máquina local:

```bash
git clone https://github.com/miche0077/googleMenuWithReact.git
```

2. Acesse o diretório do projeto:

```bash
cd googleMenuWithReact
```

3. Instale as dependências do projeto:

```bash
npm install
```

## Uso

Após instalar todas as dependências, você pode executar o projeto com o seguinte comando:

```bash
npm start
```

Isso iniciará a aplicação em modo de desenvolvimento. Abra seu navegador e acesse [http://localhost:3000](http://localhost:3000) para ver o menu do Google.

## Estrutura do Projeto

O projeto segue a seguinte estrutura de diretórios:

```
menu-google-react/
  ├── src/
  │   ├── components/
  │   │   ├── Buttons.js
  │   │   ├── Footer.js
  │   │   ├── Header.js
  │   │   ├── Search.js
  │   ├── styles
  │   ├── App.js
  │   ├── index.js
  ├── README.md
  ├── package.json
  ├── package-lock.json
```

- O diretório `src/components` contém os componentes individuais que compõem o menu do Google.
- O arquivo `src/App.js` é o componente principal que importa e renderiza os componentes individuais.
- O arquivo `src/styles` contém os estilos CSS .
- O arquivo `src/index.js` é o ponto de entrada da aplicação.


## Contribuições

Se desejar contribuir para este projeto, siga os seguintes passos:

1. Crie um fork deste repositório em sua conta do GitHub.
2. Clone seu fork em sua máquina local:

```bash
git clone https://github.com/miche0077/googleMenuWithReact.git
```

3. Crie um branch para suas alterações:

```bash
git checkout -b meu-branch
```

4. Faça suas modificações e faça commits:

```bash
git commit -m "Descrição das alterações"
```

5. Envie suas alterações para seu fork:

```bash
git push origin meu-branch
```

6. Abra um pull request no repositório original.

## Licença

Este projeto é distribuído sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais informações.

---

Obrigado por utilizar este projeto! Se tiver alguma dúvida ou sugestão, não hesite em abrir um issue no re