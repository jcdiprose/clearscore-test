// test for the reducer
import reducer, { Action, SET_TRACK_STATUS } from './reducer'
import { expect, it } from 'vitest'

const initialState = {
  publicInformation: {
    onTrack: false,
  },
  creditUtilisation: {
    onTrack: false,
  },
  electoralRoll: {
    onTrack: false,
  },
}

it('Should set all to on track', () => {
  const action: Action = {
    type: SET_TRACK_STATUS,
    payload: {
      personal: {
        publicInfo: {
          courtAndInsolvencies: [],
        },
        electoralRoll: [
          {
            current: true,
          },
        ],
      },
      accounts: [
        {
          accountCategory: 'credit_cards',
          balance: {
            amount: 1000,
          },
          limit: {
            amount: 2500,
          },
        },
      ],
    },
  }
  const expected = {
    publicInformation: {
      onTrack: true,
    },
    creditUtilisation: {
      onTrack: true,
    },
    electoralRoll: {
      onTrack: true,
    },
  }

  expect(reducer(initialState, action)).toEqual(expected)
})

it('Public information should be off track', () => {
  const action: Action = {
    type: SET_TRACK_STATUS,
    payload: {
      personal: {
        publicInfo: {
          courtAndInsolvencies: [
            {
              courtName: 'test',
            },
          ],
        },
        electoralRoll: [
          {
            current: true,
          },
        ],
      },
      accounts: [
        {
          accountCategory: 'credit_cards',
          balance: {
            amount: 1000,
          },
          limit: {
            amount: 2500,
          },
        },
      ],
    },
  }
  const expected = {
    publicInformation: {
      onTrack: false,
    },
    creditUtilisation: {
      onTrack: true,
    },
    electoralRoll: {
      onTrack: true,
    },
  }

  expect(reducer(initialState, action)).toEqual(expected)
})

it('Credit utilization should be off track', () => {
  const action: Action = {
    type: SET_TRACK_STATUS,
    payload: {
      personal: {
        publicInfo: {
          courtAndInsolvencies: [],
        },
        electoralRoll: [
          {
            current: true,
          },
        ],
      },
      accounts: [
        {
          accountCategory: 'credit_cards',
          balance: {
            amount: 1000,
          },
          limit: {
            amount: 1200,
          },
        },
      ],
    },
  }
  const expected = {
    publicInformation: {
      onTrack: true,
    },
    creditUtilisation: {
      onTrack: false,
    },
    electoralRoll: {
      onTrack: true,
    },
  }

  expect(reducer(initialState, action)).toEqual(expected)
})

it('Electoral Roll should be off track', () => {
  const action: Action = {
    type: SET_TRACK_STATUS,
    payload: {
      personal: {
        publicInfo: {
          courtAndInsolvencies: [],
        },
        electoralRoll: [],
      },
      accounts: [
        {
          accountCategory: 'credit_cards',
          balance: {
            amount: 1000,
          },
          limit: {
            amount: 2500,
          },
        },
      ],
    },
  }
  const expected = {
    publicInformation: {
      onTrack: true,
    },
    creditUtilisation: {
      onTrack: true,
    },
    electoralRoll: {
      onTrack: false,
    },
  }

  expect(reducer(initialState, action)).toEqual(expected)
})

it('All should be off track', () => {
  const action: Action = {
    type: SET_TRACK_STATUS,
    payload: {
      personal: {
        publicInfo: {
          courtAndInsolvencies: [
            {
              courtName: 'test',
            },
          ],
        },
        electoralRoll: [
          {
            current: false,
          },
        ],
      },
      accounts: [
        {
          accountCategory: 'credit_cards',
          balance: {
            amount: 1000,
          },
          limit: {
            amount: 1200,
          },
        },
      ],
    },
  }
  const expected = {
    publicInformation: {
      onTrack: false,
    },
    creditUtilisation: {
      onTrack: false,
    },
    electoralRoll: {
      onTrack: false,
    },
  }

  expect(reducer(initialState, action)).toEqual(expected)
})
