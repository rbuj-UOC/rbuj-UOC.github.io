// -----------------
// menú de navegació
// -----------------

const links = [
  { href: "index.2010-11.html", label: "2010/11" },
  { href: "index.2011-12.html", label: "2011/12" },
  { href: "index.2013-14.html", label: "2013/14" },
  { href: "index.2023-24.html", label: "2023/24" },
  { href: "index.2024-25.html", label: "2024/25" },
  { href: "index.2025-26.html", label: "2025/26" },
  { href: "index.2026-27.html", label: "2026/27" },
  { href: "index.html", label: "2026-1" },
  { href: "index.2026-27.Q2.html", label: "2026-2" },
  { href: "index.2027-28.Q1.html", label: "2027-1" },
  { href: "index.2027-28.Q2.html", label: "2027-2" },
  { href: "index.2028-29.Q1.html", label: "2028-1" },
  { href: "index.2028-29.Q2.html", label: "2028-2" }
];

const nav = document.getElementById("nav");
const currentPage = window.location.pathname.split("/").pop() || "index.html";

// Només generar el menú si està buit
if (nav.children.length === 0) {
  links.forEach(link => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = link.href;
    a.textContent = link.label;

    if (link.href === currentPage) {
      a.classList.add("current");
    }

    li.appendChild(a);
    nav.appendChild(li);
  });
} else {
  // Si ja existeix, només aplicar la classe current
  nav.querySelectorAll("a").forEach(a => {
    if (a.getAttribute("href") === currentPage) {
      a.classList.add("current");
    }
  });
}

// Oculta els últims 5 elements del menú de navegació en producció
(function(){
  const host=window.location.hostname;
  const isLocal=host.indexOf("localhost")===0||host.indexOf("127.0.0.1")===0;
  if (isLocal) return;
  const navList=document.querySelector("header nav ul");
  if (!navList) return;
  const items=navList.querySelectorAll("li");
  const totalItems=items.length;
  const hiddenItems=4;
  const start=Math.max(0,totalItems-hiddenItems);
  for(let i=start;i<totalItems;i++){
    if(items[i])items[i].style.display="none";
  }
})();

// Funció per copiar al porta-retalls l'ordre d'instal·lació
function myFunction(){
  navigator.clipboard.writeText('/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/rbuj-UOC/rbuj-UOC.github.io/refs/heads/main/init.sh)"');
}

// Generar el copyright dinàmicament
(function(){
  const copyrightYear=new Date().getFullYear();
  const copyrightText='© '+copyrightYear+' Robert Buj';
  const copyrightElement=document.getElementById('copyright-year');
  if(copyrightElement){
    copyrightElement.textContent=copyrightText;
  }
})();

// Obtenir els colors CSS definits a :root
const css = getComputedStyle(document.documentElement);

// Colors base i destacats
const baseColor = css.getPropertyValue('--color-menu').trim();
const highlightColor = css.getPropertyValue('--color-active-menu').trim();
const gridColor = 'rgba(243,240,202,0.2)';
const mainColor = css.getPropertyValue('--color-principal').trim();
const ternaryColor = css.getPropertyValue('--color-terciari').trim();
const quaternaryColor = css.getPropertyValue('--color-quaternari').trim();
const quinaryColor = css.getPropertyValue('--color-quinari').trim();
const sixColor = css.getPropertyValue('--color-sis').trim();
const sevenColor = css.getPropertyValue('--color-set').trim();
const eightColor = css.getPropertyValue('--color-vuit').trim();

// Inicialitzar els botons per commutar la visibilitat de les assignatures
document.addEventListener('DOMContentLoaded',function(){
  // Botons per expandir/col·lapsar totes les assignatures d'un curs
  const courses=document.querySelectorAll('.course');
  courses.forEach(course=>{
    const dashboard=course.querySelector('.dashboard');
    if(dashboard){
      const h2=course.querySelector('h2');
      if(h2){
        const expandBtn=document.createElement('button');
        expandBtn.className='course-expand-btn';
        expandBtn.textContent='⥥';
        expandBtn.setAttribute('aria-label','Expandeix/col·lapsa totes les assignatures');
        h2.appendChild(expandBtn);
        expandBtn.addEventListener('click',function(e){
          e.preventDefault();
          e.stopPropagation();
          const subjectBodies=course.querySelectorAll('.subject-body');
          const allVisible=Array.from(subjectBodies).every(body=>body.classList.contains('visible'));
          subjectBodies.forEach((body)=>{
            if(allVisible){
              body.classList.remove('visible');
            }else{
              body.classList.add('visible');
            }
          });
          if(allVisible){
            expandBtn.classList.remove('expanded');
          }else{
            expandBtn.classList.add('expanded');
          }
        });
      }
    }
  });
});

// ----------------------------------------------
// Gràfica de barres de crèdits ECTS per semestre
// ----------------------------------------------
const ctx = document.getElementById('graficaCredits');
ctx.height = 200;
ctx.width = ctx.parentElement.offsetWidth;

// Labels i dades comunes
const labels = ['10/11-1', '10/11-2', '11/12-1', '11/12-2', '13/14-1',
                '23/24-1', '23/24-2', '24/25-1', '24/25-2',
                '25/26-1', '25/26-2', '26/27-1', '26/27-2',
                '27/28-1', '27/28-2', '28/29-1', '28/29-2'];

const data = [15, 20, 32, 22, 4, 18, 28, 24, 24, 30, 34, 34, 34, 27, 30, 30, 30];

// Convertir anys a índexs
const idxs = anysRessaltats.map(any => labels.indexOf(any));

// Arrays automàtics
const backgroundColors = labels.map((_, i) =>
  idxs.includes(i) ? highlightColor : baseColor
);

new Chart(ctx, {
  type: 'bar',
  data: {
    labels,
    datasets: [{
      label: 'Crèdits ECTS',
      data,
      backgroundColor: backgroundColors,
      borderWidth: 0
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        labels: { color: quaternaryColor }
      },
      title: {
        display: true,
        text: 'Crèdits ECTS per semestre',
        color: quaternaryColor,
        font: {
          family: "'Lora', serif",
          size: 16
        }
      }
    },
    scales: {
      x: {
        ticks: { color: quaternaryColor },
        grid: { color: gridColor }
      },
      y: {
        ticks: { color: quaternaryColor },
        grid: { color: gridColor }
      }
    }
  }
});


// -----------------------------------------------
// Gràfiques amb l'estat dels crèdits dels màsters
// -----------------------------------------------
const container = document.getElementById("creditsChartsGrid");

chartData.forEach((item, index) => {
  // Crear contenidor de cada gràfica
  const box = document.createElement("div");
  box.className = "chart-box";

  // Títol
  const title = document.createElement("div");
  title.className = "chart-title";
  title.textContent = item.title;
  box.appendChild(title);

  // Canvas
  const canvas = document.createElement("canvas");
  canvas.id = "chart" + index;
  box.appendChild(canvas);

  container.appendChild(box);

  // Calculem els crèdits restants (assegura que no sigui inferior a 0)
  const restants = Math.max(0, item.totals - (item.aprovats + item.anivelladors + item.convalidats + item.matriculats));

  // Crear gràfica Chart.js
  new Chart(canvas, {
    type: "doughnut",
    data: {
      labels: ["Crèdits anivelladors", "Crèdits aprovats", "Crèdits convalidats", "Crèdits matriculats", "Crèdits restants"],
      datasets: [{
        data: [item.anivelladors, item.aprovats, item.convalidats, item.matriculats, restants],
        backgroundColor: [eightColor, sixColor, quinaryColor, ternaryColor, sevenColor],
        borderColor: quaternaryColor,
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
          position: "bottom",
          labels: {
            color: quaternaryColor
          }
        }
      }
    }
  });
});


// --------------------------------------------------
// Gràfica circular amb els crèdits del curs/semestre
// --------------------------------------------------
const pieChartCanvas = document.getElementById(pieChartConfig.canvasId);

if (pieChartCanvas) {
  pieChartCanvas.style.display = "block";
  pieChartCanvas.style.margin = "0";
  const pieLabels = chartData
    .filter(item => item.matriculats > 0)
    .map(item => item.label);

  const pieValues = chartData
    .filter(item => item.matriculats > 0)
    .map(item => item.matriculats);

  if (pieLabels.length > 0 && pieValues.length > 0) {
    pieChartConfig.labels = pieLabels;
    pieChartConfig.data = pieValues;
  }

  new Chart(pieChartCanvas, {
    type: 'pie',
    data: {
      labels: pieChartConfig.labels,
      datasets: [{
        data: pieChartConfig.data,
        backgroundColor: [sixColor, sevenColor, quinaryColor, eightColor],
        borderColor: quaternaryColor,
        borderWidth: 2
      }]
    },
    options: {
      responsive: false,
      layout: { padding: 0 },
      plugins: {
        legend: {
          position: "right",
          labels: {
            color: quaternaryColor,
            padding: 20,
            boxWidth: 12
          }
        },
        title: {
          display: true,
          text: pieChartConfig.title,
          color: quaternaryColor,
          font: {
            family: "'Lora', serif",
            size: 16
          },
          align: "start"
        }
      }
    }
  });
}
