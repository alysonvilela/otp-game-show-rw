import type { Prisma, Author } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AuthorCreateArgs>({
  author: {
    one: { data: { nick_name: 'String1445513' } },
    two: { data: { nick_name: 'String6822896' } },
  },
})

export type StandardScenario = ScenarioData<Author, 'author'>
