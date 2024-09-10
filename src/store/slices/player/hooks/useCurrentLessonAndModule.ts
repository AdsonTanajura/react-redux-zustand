import { useAppSelector } from "../../..";

const useCurrentLessonAndModule = () => {
    return useAppSelector(state => {
        const { currentLessonIndex, currentModuleIndex } = state.player;

        const currentModule = state.player.course.modules[currentModuleIndex];
        const currentLesson = currentModule?.lessons[currentLessonIndex];

        return { currentLesson, currentModule };
    });
};

export default useCurrentLessonAndModule;