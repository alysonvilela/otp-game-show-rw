import type { Room } from '@prisma/client'

import { rooms, room, createRoom, updateRoom, deleteRoom } from './rooms'
import type { StandardScenario } from './rooms.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('rooms', () => {
  scenario('returns all rooms', async (scenario: StandardScenario) => {
    const result = await rooms()

    expect(result.length).toEqual(Object.keys(scenario.room).length)
  })

  scenario('returns a single room', async (scenario: StandardScenario) => {
    const result = await room({ id: scenario.room.one.id })

    expect(result).toEqual(scenario.room.one)
  })

  scenario('creates a room', async () => {
    const result = await createRoom({
      input: {
        slug: 'String4533563',
        otp: 'String9915677',
        title: 'String',
        meta: 'String',
      },
    })

    expect(result.slug).toEqual('String4533563')
    expect(result.otp).toEqual('String9915677')
    expect(result.title).toEqual('String')
    expect(result.meta).toEqual('String')
  })

  scenario('updates a room', async (scenario: StandardScenario) => {
    const original = (await room({ id: scenario.room.one.id })) as Room
    const result = await updateRoom({
      id: original.id,
      input: { slug: 'String12035962' },
    })

    expect(result.slug).toEqual('String12035962')
  })

  scenario('deletes a room', async (scenario: StandardScenario) => {
    const original = (await deleteRoom({ id: scenario.room.one.id })) as Room
    const result = await room({ id: original.id })

    expect(result).toEqual(null)
  })
})
