import type { Prisma, Room } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.RoomCreateArgs>({
  room: {
    one: {
      data: {
        slug: 'String9963086',
        otp: 'String4858769',
        title: 'String',
        meta: 'String',
      },
    },
    two: {
      data: {
        slug: 'String3744484',
        otp: 'String4825623',
        title: 'String',
        meta: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Room, 'room'>
