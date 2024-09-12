import { describe, it, expect } from "vitest";
import { player as reducer, play, nextVideo} from "./player";
import { PlayerState } from "./player";

const exampleState: PlayerState = {
    course: {
        id: 1,
        modules: [
            {
              id: 1,
              title: 'Iniciando com React',
              lessons: [
                { id: 'Jai8w6K_GnY', title: 'CSS Modules', duration: '13:45' },
                { id: 'w-DW4DhDfcw', title: 'Estilização do Post', duration: '10:05' },
              ],
            },
            {
              id: 2,
              title: 'Estrutura da aplicação',
              lessons: [
                { id: 'gE48FQXRZ_o', title: 'Componente: Comment', duration: '13:45' },
                { id: 'Ng_Vk4tBl0g', title: 'Responsividade', duration: '10:05' },
              ],
            },
          ],
    },
    currentModuleIndex: 0,
    currentLessonIndex: 0,
}

describe('player slice', () => {
    it('shoult be able to play', () => {
        const state = reducer(exampleState, play([1, 2]))

        expect(state.currentModuleIndex).toEqual(1)
        expect(state.currentLessonIndex).toEqual(2)

    })

    it('shoult be able to play next video automatically', () => {
        const state = reducer(exampleState, nextVideo())

        expect(state.currentModuleIndex).toEqual(0)
        expect(state.currentLessonIndex).toEqual(1)

    })

    it('shoult be able to jump to the next module automatically', () => {
        const state = reducer({...exampleState, currentLessonIndex: 1}, nextVideo())

        expect(state.currentModuleIndex).toEqual(1)
        expect(state.currentLessonIndex).toEqual(0)

    })

    it('shoult not update the current module and lesson index if no next lesson available', () => {
        const state = reducer({...exampleState, currentLessonIndex: 1, currentModuleIndex: 1}, nextVideo())

        expect(state.currentModuleIndex).toEqual(1)
        expect(state.currentLessonIndex).toEqual(1)

    })
})