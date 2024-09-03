import { formatTime } from "@utils/functions/formatTime";
import { TimerFormat } from "@utils/types";
import { useState, useEffect } from "react";

type UseTimerProps = {
	startTimeInSeconds?: number;
	format?: TimerFormat;
};

export function UseTimer(props?: UseTimerProps) {
	const [seconds, setSeconds] = useState(props?.startTimeInSeconds ?? 0);

	useEffect(() => {
		const timer = setInterval(() => {
			setSeconds((prevSeconds) => prevSeconds + 1);
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return formatTime(seconds, props?.format);
}

// TODO: LOGICA SMAP PARA EL PROGRESO INIFINITO
// const [infiniteProgress, setInfiniteProgress] = useState(progress);
// 	const [seconds, setSeconds] = useState(0);

// 	useEffect(() => {
// 		if (!isInfinite) return;

// 		const timer = setInterval(() => {
// 			if (infiniteProgress === 100) setInfiniteProgress(0);
// 			setInfiniteProgress(infiniteProgress + 10);
// 			setSeconds(seconds + 1);
// 		}, 1000);

// 		return () => {
// 			clearInterval(timer);
// 		};
// 	}, [infiniteProgress, isInfinite, seconds]);

// 	const radius = (size - strokeWidth) / 2;
// 	const circumference = 2 * Math.PI * radius;
// 	const strokeDashoffset =
// 		circumference - (infiniteProgress / 100) * circumference;
