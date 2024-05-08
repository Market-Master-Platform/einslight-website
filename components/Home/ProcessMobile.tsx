import { useDictionary } from '@/context/dictionary-provider';
import React, { useState, useEffect, CSSProperties } from 'react';
import './ProcessMobile.css';

export interface IProcessProps {
    completedSteps: number;
    diameter?: number;
    totalSteps?: number;
    startColor?: string;
    stopColor?: string;
    circleWidth?: number;
    animationDuration?: number;
    circleColor?: string;
    innerDisplay?: string;
    percentColor?: string;
    flagClicked?: boolean;
    innerColor?: string;
    onSelectedStep: (step: number) => void;
}

const ProcessMobile = (props: IProcessProps) => {
    const {
        diameter = 100,
        totalSteps = 10,
        completedSteps = 0,
        startColor = "#FF0000",
        stopColor = "#0000FF",
        circleWidth = 10,
        animationDuration = 1000,
        circleColor = "#000000",
        innerDisplay = "slot",
        percentColor = "inherit",
        flagClicked = false,
        innerColor = "transparent",
    } = props;

    const dictionary = useDictionary();

    const [selectedContent, setSelectedContent] = useState({
        title: dictionary.homepage.process.tradition_title,
        content: dictionary.homepage.process.tradition_description,
    });

    const contents = [
        {
            head: dictionary.homepage.process.tradition,
            title: dictionary.homepage.process.tradition_title,
            content: dictionary.homepage.process.tradition_description,
        },
        {
            head: dictionary.homepage.process.digital_transformation,
            title: dictionary.homepage.process.digital_transformation_title,
            content: dictionary.homepage.process.digital_transformation_description,
        },
        {
            head: dictionary.homepage.process.digital_transformation_definition,
            title: dictionary.homepage.process.digital_transformation_definition_title,
            content: dictionary.homepage.process.digital_transformation_definition_description,
        },
        {
            head: dictionary.homepage.process.digital_transformation_process,
            title: dictionary.homepage.process.digital_transformation_process_title,
            content: dictionary.homepage.process.digital_transformation_process_description,
        },
        {
            head: dictionary.homepage.process.digital_transformation_solutions,
            title: dictionary.homepage.process.digital_transformation_solutions_title,
            content: dictionary.homepage.process.digital_transformation_solutions_description,
        },
        {
            head: dictionary.homepage.process.digital_transformation_benefits,
            title: dictionary.homepage.process.digital_transformation_benefits_title,
            content: dictionary.homepage.process.digital_transformation_benefits_description,
        },
        {
            head: dictionary.homepage.process.about_us,
            title: dictionary.homepage.process.about_us_title,
            content: dictionary.homepage.process.about_us_description,
        },
    ];

    const gradient = {
        fx: 1,
        fy: 0.5,
        cx: 0.5,
        cy: 0.5,
        r: 0.65,
    };

    const radius = diameter / 2;
    const innerCircleDiameter = diameter - circleWidth * 2;
    const innerCircleRadius = innerCircleDiameter / 2;
    const circumference = 640;
    const stepSize = totalSteps === 0 ? 0 : 100 / totalSteps;

    const [strokeDashoffset, setStrokeDashoffset] = useState(circumference);

    const changeProgress = (finishedPercentage: number) => {
        setStrokeDashoffset(((finishedPercentage) / 100) * circumference);
    };
    const getContentProcess = () => {
        if (flagClicked) {
            setSelectedContent(contents[completedSteps]);
        } else {
            setSelectedContent(contents[completedSteps - 1 >= 0 ? completedSteps - 1 : 0]);
        }
    };

    useEffect(() => {
        changeProgress(stepSize * completedSteps);
    }, []);

    useEffect(() => {
        changeProgress(stepSize * completedSteps);
        getContentProcess();
    }, [completedSteps]);

    const strokeStyle = {
        height: `${diameter}px`,
        width: `${diameter}px`,
        strokeWidth: `${circleWidth}px`,
    };

    const onSelectedStep = (step: number) => {
        props.onSelectedStep(step);
    }

    const processClassName = 'b-process-flex-row text-white gap-8 flex items-center';

    return (
        <div className="circle-progress-container-mobile flex items-center relative">
            <ul className="circle-progress-inner-mobile flex flex-col gap-8 justify-center z-10">
                {
                    contents.map((content, index) =>
                        <li
                            key={content.head}
                            className={processClassName}>
                            <div className="bg-einslight-green font-bold text-white text-center uppercase rounded-full size-32 text-xs flex-0 flex items-center justify-center">
                                {content.head}
                            </div>
                            <div className="flex-1 text-xs">
                                <h1 className="font-bold uppercase mb-4">{content.title}</h1>
                                <span className="text-justify">{content.content}</span>
                            </div>
                        </li>)
                }
            </ul>

            <svg
                width={128}
                height={1120}
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-0"
            >
                <line x1="64" y1="64" x2="64" y2="1060" stroke={startColor} strokeWidth="4"
                    style={{
                        strokeDashoffset: strokeDashoffset,
                        transition: `stroke-dashoffset ${animationDuration}ms linear`
                    }} />

            </svg>
        </div >
    );
};

export default ProcessMobile;