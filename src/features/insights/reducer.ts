import calcPercentage from '../../utils/calcPercentage'

export const SET_TRACK_STATUS = 'SET_TRACK_STATUS'

type SetTrackStatusAction = {
  type: typeof SET_TRACK_STATUS
  payload: any
}

export type Action = SetTrackStatusAction

interface State {
  publicInformation?: {
    onTrack: boolean
  }
  creditUtilisation?: {
    onTrack: boolean
  }
  electoralRoll?: {
    onTrack: boolean
  }
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case SET_TRACK_STATUS:
      const { personal, accounts } = action.payload

      const publicOnTrack = !personal.publicInfo.courtAndInsolvencies?.length
      // I haven't typed the accounts object, but it's an array of objects with a balance and limit property
      const creditCard = accounts.find(({ accountCategory }) => accountCategory === 'credit_cards')
      const creditBalance = creditCard?.balance?.amount
      const creditLimit = creditCard?.limit?.amount
      const creditOnTrack: boolean =
        (creditBalance && creditLimit && calcPercentage(creditBalance, creditLimit) < 50) || false

      const electoralOnTrack: boolean =
        personal.electoralRoll?.some(({ current }) => current) ?? false

      return {
        ...state,
        publicInformation: {
          onTrack: publicOnTrack,
        },
        creditUtilisation: {
          onTrack: creditOnTrack,
        },
        electoralRoll: {
          onTrack: electoralOnTrack,
        },
      }
    default: {
      return state
    }
  }
}

export default reducer
