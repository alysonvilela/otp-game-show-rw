import type { Prisma, Room } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.RoomCreateArgs>({
  room: {
    one: {
      data: {
        otp: 'String4858769',
        title: 'String',
        meta: 'String',
      },
    },
    two: {
      data: {
        otp: 'String4825623',
        title: 'String',
        meta: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Room, 'room'>
