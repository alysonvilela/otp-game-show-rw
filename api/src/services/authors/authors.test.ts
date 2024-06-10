import type { Author } from '@prisma/client'

import {
  authors,
  author,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} from './authors'
import type { StandardScenario } from './authors.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('authors', () => {
  scenario('returns all authors', async (scenario: StandardScenario) => {
    const result = await authors()

    expect(result.length).toEqual(Object.keys(scenario.author).length)
  })

  scenario('returns a single author', async (scenario: StandardScenario) => {
    const result = await author({ id: scenario.author.one.id })

    expect(result).toEqual(scenario.author.one)
  })

  scenario('creates a author', async () => {
    const result = await createAuthor({
      input: { nick_name: 'String692024' },
    })

    expect(result.nick_name).toEqual('String692024')
  })

  scenario('updates a author', async (scenario: StandardScenario) => {
    const original = (await author({ id: scenario.author.one.id })) as Author
    const result = await updateAuthor({
      id: original.id,
      input: { nick_name: 'String2233182' },
    })

    expect(result.nick_name).toEqual('String2233182')
  })

  scenario('deletes a author', async (scenario: StandardScenario) => {
    const original = (await deleteAuthor({
      id: scenario.author.one.id,
    })) as Author
    const result = await author({ id: original.id })

    expect(result).toEqual(null)
  })
})
