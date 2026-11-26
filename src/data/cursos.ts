import { CodeXml, Database, Server, Terminal } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Curso = {
  id: number
  nome: string
  categoria: string
  nivel: string
  descricao: string
  caminho: string
  arte: string
  Icone: LucideIcon
  modulos: string[]
}

export const cursos: Curso[] = [
  {
    id: 1,
    nome: 'NestJS do Zero',
    categoria: 'Backend',
    nivel: 'Intermediário',
    descricao: 'APIs REST com NestJS, Knex e PostgreSQL em arquitetura de camadas.',
    caminho: '~/backend',
    arte: '{api}',
    Icone: Server,
    modulos: ['Introdução ao NestJS', 'Banco de dados com Knex'],
  },
  {
    id: 2,
    nome: 'React Moderno',
    categoria: 'Frontend',
    nivel: 'Iniciante',
    descricao: 'Componentes, hooks e estado com React e TypeScript.',
    caminho: '~/frontend',
    arte: '</>',
    Icone: CodeXml,
    modulos: ['Fundamentos do React', 'Componentes e estado'],
  },
  {
    id: 3,
    nome: 'Curso de como bangar certo no cs',
    categoria: 'Games',
    nivel: 'Intermediário',
    descricao: 'Fundamentos de estratégia, comunicação e tomada de decisão em equipe.',
    caminho: '~/games/cs',
    arte: '🎮',
    Icone: Terminal,
    modulos: ['Fundamentos e estratégia', 'Comunicação em equipe'],
  },
  {
    id: 4,
    nome: 'Docker para Devs',
    categoria: 'DevOps',
    nivel: 'Iniciante',
    descricao: 'Containers, imagens e Docker Compose.',
    caminho: '~/devops',
    arte: '$ ops',
    Icone: Terminal,
    modulos: ['Containers e imagens', 'Docker Compose'],
  },
  {
    id: 5,
    nome: 'PostgreSQL na Prática',
    categoria: 'Banco de Dados',
    nivel: 'Intermediário',
    descricao: 'Modelagem, índices, joins e transações.',
    caminho: '~/database',
    arte: 'SQL',
    Icone: Database,
    modulos: ['Modelagem relacional', 'Consultas e índices'],
  },
]
