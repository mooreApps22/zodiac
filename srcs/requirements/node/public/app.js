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

const	ring = document.getElementById("zodiac-ring");
const	signName = document.getElementById("sign-name");
const	radius = 140;
const	startDeg = -90;

function setRingRotation(deg) {
	ring.style.setProperty("--ring-rot", `${deg}deg`);
	// keep glyph upright by updating each glyph
	document.querySelectorAll(".glyph").forEach((el) =>  {
		el.style.transform = `rotate(${-deg}deg)`;
	});
}

function buildRing() {
	ring.innerHTML = "";
	ZODIAC.forEach((item, i) => {
		const	deg = startDeg + (i * 360) / ZODIAC.length;
		const	rad = (deg * Math.PI) / 180;
		// Soh Cah Toa
		const	x = Math.cos(rad) * radius;
		const	y = Math.sin(rad) * radius;

		const	btn = document.createElement("button");
		btn.className = "zodiac";
		btn.type = "button";
		btn.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;

		const glyph = document.createElement("span");
		glyph.className = "glyph";
		glyph.textContent = item.symbol;

		btn.appendChild(glyph);
		btn.addEventListener("click", () => {
			const rot = 90 - deg;
			setRingRotation(rot);
			signName.textContent = item.name;
		});
		ring.appendChild(btn);
	});
	setRingRotation(0);
}

buildRing();

fetch("/api/health").catch(() => {});
