# Project Trybers and Dragons
#### _by [Allyson Belli Bogo](https://www.linkedin.com/in/allysonbogo/)_

## :page_with_curl: Sobre

O projeto Trybers and Dragons é uma aplicação em TypeScript desenvolvida para a criação de um jogo Role-Playing Game (RPG) em que é possível a criação de jogadores com raças e arquétipos específicos, monstros, dragões e outros personagens inspirados no universo da fantasia medieval.

O projeto foi desenvolvido utilizando os princípios SOLID da Programação Orientada a Objetos (POO) e possui um sistema de lutas Player vs Player (PVP) e Player vs Environment (PVE).


## 🛠️ Ferramentas Utilizadas

* TypeScript
* Princípios SOLID
* Programação Orientada a Objetos (POO)


## ⚙️ Como Executar

> :warning: &nbsp; _É necessário ter o Docker instalado para executar este projeto_

<details>
  <summary> Passo a passo </summary>
  <br>

1. Clone o repositório em uma pasta de preferência

```
git clone git@github.com:allysonbogo/project-trybers-and-dragons.git
```

2. Entre na pasta raíz do projeto e instale todas as dependências

```
npm install
```

3. Para rodar o projeto é necessário executar o comando abaixo no diretório raiz do projeto. Isso fará com que os containers docker sejam orquestrados e a aplicação esteja disponível

```
docker-compose up -d
```
