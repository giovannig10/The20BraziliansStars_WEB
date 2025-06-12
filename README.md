# The 20 Brazilians Stars WEB

Este projeto é uma plataforma web interativa que apresenta informações completas sobre os 20 clubes que disputam o Brasileirão Betano 2025. Aqui você encontra dados sobre história, estádio, torcida, elenco, títulos e curiosidades de cada clube brasileiro da Série A.

## ✨ Funcionalidades

- Página inicial com apresentação dos clubes participantes
- Página de cada time com:
    - História do clube
    - Estádio (imagens, localização, capacidade)
    - Torcida (imagens, curiosidades)
    - Elenco (cards dos jogadores, posição, número, nacionalidade, altura, idade)
    - Títulos e retrospecto
- Página de troféus e conquistas históricas
- Sistema de autenticação (login, registro)
- Interface responsiva e moderna

## 🚀 Tecnologias Utilizadas

- **React** (Next.js App Router)
- **JavaScript (ES6+)**
- **CSS Modules** para estilização
- **Axios** para requisições HTTP
- **Coolify** (backend hospedado, nossa API)

## 📁 Estrutura de Pastas

```
src/
    app/
        components/        # Componentes reutilizáveis (PlayersCard, Team, etc)
        context/           # Contextos globais (AuthContext)
        pages/             # Páginas principais (home, teams, trophy, etc)
        services/          # Serviços de API (authService)
        register/          # Página e estilos de registro
        update/            # Página e estilos de atualização de dados
    middleware.js        # Middlewares do Next.js
    globals.css          # Estilos globais
```

## ⚙️ Como rodar o projeto

1. **Clone o repositório:**
     ```bash
     git clone https://github.com/giovannig10/The20BraziliansStars_WEB.git
     cd The20BraziliansStars_WEB
     ```

2. **Instale as dependências:**
     ```bash
     npm install
     ```

3. **Inicie o servidor de desenvolvimento:**
     ```bash
     npm run dev
     ```

4. **Acesse no navegador:**
     ```
     http://localhost:3000
     ```

## 🏗️ Principais Componentes

- **PlayersCard:** Exibe cards dos jogadores filtrados por time, com informações detalhadas.
- **Team:** Página de cada clube, mostrando história, estádio, torcida, elenco e títulos.
- **AuthContext:** Gerencia autenticação de usuários (login, registro, logout).
- **Header/Footer:** Navegação e rodapé do site.

## 🔒 Autenticação

- Cadastro e login de usuários com armazenamento de token.
- Logout e proteção de rotas sensíveis.

## 📦 API

- Os dados dos jogadores são consumidos de uma API externa hospedada no Coolify.
- Exemplo de endpoint: `https://tbs-back.coolify.fps92.dev/teams` ou `https://tbs-back.coolify.fps92.dev/players`

## 👨‍💻 Contribuição

1. Faça um fork do projeto
2. Crie uma branch: `git checkout -b minha-feature`
3. Commit suas alterações: `git commit -m 'feat: minha nova feature'`
4. Push na branch: `git push origin minha-feature`
5. Abra um Pull Request

Desenvolvido com 💙 para apaixonados pelo futebol brasileiro!