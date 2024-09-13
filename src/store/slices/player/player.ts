import { createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit";
import { api } from "../../../lib/axios";

interface CourserState {
    id: number;
    modules: Array<{
        id: number;
        title: string;
        lessons: Array<{
            id: string;
            title: string;
            duration: string;
        }>
    }>
}
export interface PlayerState {
    course: CourserState | null;
    currentModuleIndex: number;
    currentLessonIndex: number;
}

const initialState:PlayerState = {
    course: null,
    currentLessonIndex: 0,
    currentModuleIndex: 0,
}

export const loadCourse = createAsyncThunk(
    'player/load',
    async () => {
        const response = await api.get('/courses/1')
        
        return response.data
    }
)

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {

        play: (state, action:PayloadAction<[number, number]>) => {
            state.currentModuleIndex = action.payload[0]
            state.currentLessonIndex = action.payload[1]
        },
        nextVideo: (state) => {
            const nextLessonIndex = state.currentLessonIndex + 1
            const nextLesson = state.course?.modules[state.currentModuleIndex].lessons[nextLessonIndex]

            if(nextLesson) {
                state.currentLessonIndex = nextLessonIndex
            } else {
                const nextModuleIndex = state.currentModuleIndex + 1
                const nextModule = state.course?.modules[nextModuleIndex]

                if(nextModule) {
                    state.currentModuleIndex = nextModuleIndex
                    state.currentLessonIndex = 0
                }
            }
        }
    },
    extraReducers(builder) {
     builder.addCase(loadCourse.fulfilled, (state, action) => {
        state.course = action.payload
     }) 
    },
});

export const player = playerSlice.reducer;

export const {play, nextVideo} = playerSlice.actions