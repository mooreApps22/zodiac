//	♈︎♉︎♊︎♋︎♌︎♍︎♎︎♏︎♐︎♑︎♒︎♓︎

const	ring = document.getElementById("zodiac-ring");
const	signName = document.getElementById("sign-name");

const zodiac = [
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

const	radius = 140;
const	startDeg = -90;
const	rotateToTangent = false;

let ringRotation = 0;

zodiac.forEach((item, i) => {
	const el = document.createElement("button");
	el.className = "zodiac";
	//el.textContent = symbol;
	el.type = "button";
	el.innerHTML = `<span class="glyph">${item.symbol}</span>`;

	const deg = startDeg + (i * 360) / zodiac.length;
	el.dataset.deg = String(deg);

	const rad = (deg * Math.PI) / 180;
	const x = Math.cos(rad) * radius;
	const y = Math.sin(rad) * radius;

	const rot = rotateToTangent ? (deg + 90) : 0;
	el.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
	ring.appendChild(el);

	el.addEventListener("click", () => {
		const itemDeg = Number(el.dataset.deg);

		//ringRotation = startDeg - itemDeg; // 12 o'clock
		ringRotation = 90 - itemDeg; // 6 o'clock
		ring.style.setProperty("--ring-rot", `${ringRotation}deg`);
		signName.textContent = item.name;
	});
});
