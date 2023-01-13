/// <reference types="react-scripts" />
declare module '*.MP4' {
    const src: string;
    export default src;
}
declare module '*.mov' {
    const src: string;
    export default src;
}
declare module '*.mp4' {
    const src: string;
    export default src;
}
// @types react-step-progress-bar
declare module 'react-step-progress-bar' {
    interface ProgressBarProps {
        percent?: number;
        filledBackground?: any;
        height?: string | number;
        stepPositions?: number;
    }

    interface StepProps {
        transition?: any;
        position?: any;
    }
    class ProgressBar extends React.Component<ProgressBarProps, any> { }
    class Step extends React.Component<StepProps, any> { }
}
