import {reducerNotes} from './noteReducer'
import deepFreeze from 'deep-freeze'

describe('noteReducer', () => {
    test('return new state with action NEW_NOTE', () => {

        const state = [
            {
                
            }
        ]



        const action = {
            type: 'NEW_NOTE',
            data: {
                content: 'The app app state is in redux store',
                important: false,
                id: 1
            }
        }

        deepFreeze(state)

        const newState = reducerNotes(state, action)

        expect(newState).toHaveLength(1)
        expect(newState).toContainEqual(action.data)

    })
})
