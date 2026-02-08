"use client";

import { useMemo, useState } from "react";

const ZODIAC = [
	{ symbol: "♈︎", name: "Aries" },
	{ symbol: "♉︎", name: "Taurus" },
	{ symbol: "♊︎", name: "Gemini" },
	{ symbol: "♋︎", name: "Cancer" },
	{ symbol: "♌︎", name: "Leo" },
	{ symbol: "♍︎", name: "Virgo" },
	{ symbol: "♎︎", name: "Libra" },
	{ symbol: "♏︎", name: "Scorpio" },
	{ symbol: "♐︎", name: "Sagittarius" },
	{ symbol: "♑︎", name: "Capricorn" },
	{ symbol: "♒︎", name: "Aquarius" },
	{ symbol: "♓︎", name: "Pisces" }
];

export default function Home() {
	const radius = 140;
	const startDeg = -90;

	const [ringRotation, setRingRotation] = useState(0);
	const [selectedName, setSelectedName] = useState("");

	const items = useMemo(() => {
		return ZODIAC.map((item, i) => {
			const deg = startDeg + (i * 360) / ZODIAC.length;
			const rad = (deg * Math.PI) / 180;
			const x = Math.cos(rad) * radius;
			const y = Math.sin(rad) * radius;

			return { ...item, deg, x, y};
		});
	}, []);

	function onPick(item) {
		const rot = 90 - item.deg;
		setRingRotation(rot);
		setSelectedName(item.name);
	}

	return (
		<>
			<div
				id="zodiac-ring"
				className="ring"
				aria-label="Zodiac ring"
				style={{ "--ring-rot": `${ringRotation}deg`}}
			>
				{items.map((item) => (
					<button
						key={item.name}	
						className="zodiac"
						type="button"
						onClick={() => onPick(item)}
						style={{
							transform: `translate(-50%, -50%) translate(${item.x}px, ${item.y}px)`
						}}
					>
						<span className="glyph">{item.symbol}</span>
					</button>
				))}
			</div>
			<h1 id="sign-name">{selectedName}</h1>
		</>
	);
}
