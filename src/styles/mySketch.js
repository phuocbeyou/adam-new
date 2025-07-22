const svg = document.getElementById("svg");

const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
const gradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
gradient.setAttribute("id", "grad");
gradient.setAttribute("x1", "0%");
gradient.setAttribute("y1", "0%");
gradient.setAttribute("x2", "100%");
gradient.setAttribute("y2", "0%");

const stops = [
  { offset: "30%", color: "#004DF4", opacity: "0" },
  { offset: "42%", color: "#004DF4", opacity: "0.4" },
  { offset: "50%", color: "#004DF4", opacity: "1" },
  { offset: "65%", color: "#26DDFF", opacity: "1" },
  { offset: "95%", color: "#26DDFF", opacity: "0" },
];

stops.forEach(s => {
  const stop = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  stop.setAttribute("offset", s.offset);
  stop.setAttribute("stop-color", s.color);
  stop.setAttribute("stop-opacity", s.opacity);
  gradient.appendChild(stop);
});

defs.appendChild(gradient);
svg.appendChild(defs);

const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
rect.setAttribute("x", "2");
rect.setAttribute("y", "2");
rect.setAttribute("width", "696");
rect.setAttribute("height", "476");
rect.setAttribute("rx", "30");
rect.setAttribute("ry", "30");
rect.setAttribute("class", "stroke");
rect.setAttribute("stroke", "url(#grad)");

svg.appendChild(rect);
