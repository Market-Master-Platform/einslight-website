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
            title: dictionary.homepage.process.tradition_title,
            content: dictionary.homepage.process.tradition_description,
        },
        {
            title: dictionary.homepage.process.digital_transformation_title,
            content: dictionary.homepage.process.digital_transformation_description,
        },
        {
            title: dictionary.homepage.process.digital_transformation_definition_title,
            content: dictionary.homepage.process.digital_transformation_definition_description,
        },
        {
            title: dictionary.homepage.process.digital_transformation_process_title,
            content: dictionary.homepage.process.digital_transformation_process_description,
        },
        {
            title: dictionary.homepage.process.digital_transformation_solutions_title,
            content: dictionary.homepage.process.digital_transformation_solutions_description,
        },
        {
            title: dictionary.homepage.process.digital_transformation_benefits_title,
            content: dictionary.homepage.process.digital_transformation_benefits_description,
        },
        {
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
    const circumference = Math.PI * innerCircleDiameter;
    const stepSize = totalSteps === 0 ? 0 : 100 / totalSteps;

    const [strokeDashoffset, setStrokeDashoffset] = useState(circumference);

    const changeProgress = (finishedPercentage: number) => {
        setStrokeDashoffset(((100 + finishedPercentage) / 100) * circumference);
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

    const containerStyle: CSSProperties = {
        height: `${diameter}px`,
        width: `${diameter}px`,
        position: 'relative'
    };

    const innerCircleStyle = {
        width: `${diameter / 2 + 60}px`,
        height: `${diameter / 2 + 60}px`,
    };

    const onSelectedStep = (step: number) => {
        props.onSelectedStep(step);
    }

    const processClassName = 'b-process-flex-row text-white size-16 rounded-full flex justify-center items-center p-6 text-center absolute top-1/2 left-1/2';

    const active = (step: number) => {
        return flagClicked ? completedSteps >= step : completedSteps > step;
    }

    return (
        <div className="circle-progress-container-mobile" style={containerStyle}>
            <ul style={innerCircleStyle} className="circle-progress-inner-mobile flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 z-10">
                <li
                    className={(active(1) ? 'bg-einslight-green font-bold' : 'bg-green-700 font-normal') + ' ' + processClassName}
                    onClick={() => onSelectedStep(2)} style={{ transform: 'rotate(259deg) translate(160px) rotate(-259deg)' }}>2</li>
                <li
                    className={(active(0) ? 'bg-einslight-green font-bold' : 'bg-green-700 font-normal') + ' ' + processClassName}
                    onClick={() => onSelectedStep(1)} style={{ transform: 'rotate(305deg) translate(130px) rotate(-305deg)' }}>1</li>
                <li
                    className={(active(6) ? 'bg-einslight-green font-bold' : 'bg-green-700 font-normal') + ' ' + processClassName}
                    onClick={() => onSelectedStep(7)} style={{ transform: 'rotate(0deg) translate(100px) rotate(0deg)' }}>7</li>
                <li
                    className={(active(5) ? 'bg-einslight-green font-bold' : 'bg-green-700 font-normal') + ' ' + processClassName}
                    onClick={() => onSelectedStep(6)} style={{ transform: 'rotate(75deg) translate(80px) rotate(-75deg)' }}>6</li>
                <li
                    className={(active(4) ? 'bg-einslight-green font-bold' : 'bg-green-700 font-normal') + ' ' + processClassName}
                    onClick={() => onSelectedStep(5)} style={{ transform: 'rotate(140deg) translate(120px) rotate(-140deg)' }}>5</li>
                <li
                    className={(active(3) ? 'bg-einslight-green font-bold' : 'bg-green-700 font-normal') + ' ' + processClassName}
                    onClick={() => onSelectedStep(4)} style={{ transform: 'rotate(180deg) translate(150px) rotate(-180deg)' }}>4</li>
                <li
                    className={(active(2) ? 'bg-einslight-green font-bold' : 'bg-green-700 font-normal') + ' ' + processClassName}
                    onClick={() => onSelectedStep(3)} style={{ transform: 'rotate(218deg) translate(170px) rotate(-218deg)' }}>3</li>

                <li className="b-process-flex-column">
                    <h1 className="b-process-center-title">{selectedContent.title}</h1>
                    <span className="b-process-center-content">{
                        selectedContent.content
                    }</span>
                </li>
            </ul>
            <svg
                viewBox="-1 -1 615 615"
                className="circle-progress-bar"
                width={diameter}
                height={diameter}
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: 'rotate(-130deg)', position: 'relative', left: '-56px', top: '-169px' }}
            >
                <defs>
                    <radialGradient
                        id={`radial-gradient20`}
                        fx={gradient.fx}
                        fy={gradient.fy}
                        cx={gradient.cx}
                        cy={gradient.cy}
                        r={gradient.r}
                    >
                        <stop offset="50%" stopColor={startColor} />
                    </radialGradient>
                </defs>
                <circle
                    r={innerCircleRadius}
                    cx={radius}
                    cy={radius}
                    fill={innerColor}
                    stroke={circleColor}
                    strokeDasharray={circumference}
                    strokeDashoffset="0"
                    strokeLinecap="round"
                    style={strokeStyle}
                ></circle>
                <circle
                    transform={`rotate(90, ${radius}, ${radius})`}
                    r={innerCircleRadius}
                    cx={radius}
                    cy={radius}
                    fill={innerColor}
                    stroke={`url(#radial-gradient20)`}
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference}
                    strokeLinecap="round"
                    style={{
                        height: `${diameter}px`,
                        width: `${diameter}px`,
                        strokeWidth: `${circleWidth * 4}px`,
                        strokeDashoffset: strokeDashoffset,
                        transition: `stroke-dashoffset ${animationDuration}ms linear`,
                    }}
                ></circle>
            </svg>
        </div >
    );
};

export default ProcessMobile;