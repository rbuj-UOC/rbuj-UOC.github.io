const subjects = [
  /* MNET */
  { id: "NET.001", name: "Desenvolupament d'aplicacions WinForms, ASP.NET i Mobile", credits: 8 },
  { id: "NET.002", name: "Eines de desenvolupament empresarial: T.System, Sharepoint i Biztalk", credits: 8 },
  { id: "NET.003", name: "Fonaments de Microsoft .NET Framework", credits: 8 },
  { id: "NET.004", name: "Serveis SQL Server per a aplicacions MS .NET", credits: 8 },
  /* MUPLL */
  { id: "M2.002", name: "Administració de sistemes GNU/Linux", credits: 5 },
  { id: "M2.001", name: "Introducció al programari lliure", credits: 5 },
  { id: "M2.005", name: "Xarxes obertes", credits: 5 },
  { id: "M2.052", name: "Sistemes distribuïts en entorns de programari lliure", credits: 5 },
  { id: "M2.003", name: "Administració avançada de sistemes GNU/Linux", credits: 5 },
  { id: "M2.004", name: "Implantació de sistemes de programari lliure", credits: 5 },
  { id: "M2.007", name: "Aspectes avançats de seguretat en xarxes", credits: 5 },
  { id: "M2.008", name: "Desenvolupament d'aplicacions web", credits: 5 },
  { id: "M2.010", name: "Desenvolupament de programari", credits: 5 },
  /* MISTIC */
  { id: "M1.702", name: "Identitat digital", credits: 6 },
  { id: "M1.701", name: "Vulnerabilitats de seguretat", credits: 6 },
  /* MUDLAW */
  { id: "M1.909", name: "Disseny d'interfícies interactives", credits: 6 },
  { id: "M4.252", name: "HTML i CSS", credits: 6 },
  { id: "M4.253", name: "Programació en JavaScript per a programadors", credits: 6 },
  { id: "M4.254", name: "Desenvolupament front-end amb frameworks JavaScript", credits: 6 },
  { id: "M4.255", name: "Desenvolupament back-end amb PHP", credits: 6 },
  { id: "M4.257", name: "Eines HTML i CSS I", credits: 6 },
  { id: "M4.256", name: "Desenvolupament front-end avançat", credits: 6 },
  { id: "M4.258", name: "Eines HTML i CSS II", credits: 6 },
  { id: "M4.259", name: "Treball de fi de màster", credits: 12 },
  /* ENG */
  { id: "00.023", name: "English A1.1", credits: 4 },
  { id: "00.024", name: "English A1.2", credits: 4 },
  { id: "00.025", name: "English A2.1", credits: 4 },
  { id: "00.096", name: "English A2.2", credits: 4 },
  { id: "eng-b1.1", name: "English B1.1", credits: 4 },
  { id: "eng-b1.2", name: "English B1.2", credits: 4 },
  { id: "eng-b2.1", name: "English B2.1", credits: 4 },
  { id: "eng-b2.2", name: "English B2.2", credits: 4 },
  /* EdP */
  { id: "12.201", name: "Python A1", credits: 6 },
  { id: "12.202", name: "Python A2", credits: 6 },
  { id: "12.205", name: "Python B1", credits: 6 },
  { id: "12.207", name: "Python B2", credits: 6 },
  { id: "12.213", name: "Python C1", credits: 6 },
  { id: "11.204", name: "JavaScript A1", credits: 6 },
  { id: "11.203", name: "JavaScript A2", credits: 6 },
  { id: "11.206", name: "JavaScript B1", credits: 6 },
  { id: "11.208", name: "JavaScript B2", credits: 6 },
  { id: "11.212", name: "JavaScript C1", credits: 6 },
  /* MUCD */
  { id: "M2.991", name: "Aprenentatge automàtic", credits: 6 },
  { id: "M2.888", name: "Bases de dades analítiques", credits: 6 },
  { id: "M2.503", name: "Programació per a la ciència de dades", credits: 6 },
  { id: "M2.990", name: "Anàlisi estadística", credits: 6 },
  { id: "M2.950", name: "Fonaments de la ciència de dades", credits: 6 },
  { id: "M2.951", name: "Tipologia i cicle de vida de les dades", credits: 6 },
  { id: "M2.959", name: "Visualització de dades", credits: 6 },
  { id: "M2.975", name: "Aprenentatge profund", credits: 6 },
  { id: "M2.958", name: "Anàlisi de dades en entorns big data", credits: 6 },
  { id: "M2.989", name: "Arquitectures de bases de dades no relacionals", credits: 6 },
  { id: "M2.961", name: "Treball de fi de màster", credits: 12 },
  /* MUEI */
  { id: "M2.959b", name: "Visualització de dades", credits: 6 },
  { id: "M1.770b", name: "Fonaments de ciberseguretat", credits: 6 },
  { id: "M1.207", name: "Sistemes de gestió de la seguretat de la informació", credits: 6 },
  { id: "M1.208", name: "Tecnologia i desenvolupament en dispositius mòbils", credits: 6 },
  { id: "05.582", name: "Intel·ligència artificial", credits: 6 },
  { id: "M1.204", name: "Intel·ligència artificial avançada", credits: 6 },
  { id: "M1.306", name: "Plataformes de publicació i distribució", credits: 6 },
  { id: "M1.202", name: "Enginyeria de la usabilitat", credits: 6 },
  { id: "M1.209", name: "Computació d'altes prestacions", credits: 6 },
  { id: "M1.205", name: "Simulació", credits: 6 },
  { id: "M1.203", name: "Tècniques avançades d'enginyeria del programari", credits: 6 },
  { id: "M1.210", name: "Sistemes distribuïts a gran escala", credits: 6 },
  { id: "M1.200", name: "Gestió avançada de projectes TIC", credits: 6 },
  { id: "M1.731", name: "Direcció estratègica de sistemes i tecnologies de la informació", credits: 6 },
  { id: "M1.211", name: "Treball de fi de màster", credits: 12 },
  /* MUBB */
  { id: "M0.152", name: "Programació per a la bioinformàtica", credits: 5 },
  { id: "M0.155", name: "Inferència estadística", credits: 5 },
  { id: "M0.163", name: "Machine Learning", credits: 5 },
  { id: "M0.153", name: "Programari per a l'anàlisi de dades", credits: 5 },
  { id: "M0.150", name: "Biologia molecular", credits: 5 },
  { id: "M7.159", name: "Biologia estructural", credits: 5 },
  { id: "M7.154", name: "Genòmica computacional", credits: 5 },
  { id: "M0.156", name: "Regressió, models i mètodes", credits: 5 },
  { id: "M0.157", name: "Anàlisi de dades òmiques", credits: 5 },
  { id: "M0.167", name: "Treball de fi de màster", credits: 15 },
  /* MUCP */
  { id: "M1.771", name: "Privadesa", credits: 6 },
  { id: "M1.709", name: "Sistemes de gestió de la seguretat", credits: 6 },
  { id: "M1.769", name: "Legislació i protecció de dades", credits: 6 },
  { id: "M1.772", name: "Seguretat i pentesting de servidors de dades", credits: 6 },
  { id: "M1.773", name: "Seguretat i pentesting de sistemes", credits: 6 },
  { id: "M1.711", name: "Anàlisi forense", credits: 6 },
  { id: "M1.770", name: "Fonaments de ciberseguretat", credits: 6 },
  { id: "M1.777", name: "Seguretat en cloud computing", credits: 6 },
  { id: "M1.779", name: "Treball de fi de màster", credits: 12 }
];

// -----------------
// menú de navegació
// -----------------

(function () {
  const host = window.location.hostname;
  const isLocal = host.indexOf("localhost") === 0 || host.indexOf("127.0.0.1") === 0;
  if (!isLocal) return;
  const navList = document.querySelector("header nav");
  if (!navList) return;
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const links = [
    { href: "index.2010-11.html", label: "2010/11" },
    { href: "index.2011-12.html", label: "2011/12" },
    { href: "index.2013-14.html", label: "2013/14" },
    { href: "index.2023-24.html", label: "2023/24" },
    { href: "index.2024-25.html", label: "2024/25" },
    { href: "index.2025-26.html", label: "2025/26" },
    { href: "index.2026-27.html", label: "2026/27" },
    { href: "index.2027-28.html", label: "2027/28" },
    { href: "index.2028-29.html", label: "2028/29" },
    { href: "index.2029-30.html", label: "2029/30" },
    { href: "index.html", label: "2026-1" },
    { href: "index.2026-27.Q2.html", label: "2026-2" },
    { href: "index.2027-28.Q1.html", label: "2027-1" },
    { href: "index.2027-28.Q2.html", label: "2027-2" },
    { href: "index.2028-29.Q1.html", label: "2028-1" },
    { href: "index.2028-29.Q2.html", label: "2028-2" }
  ];
  links.forEach(link => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = link.href;
    a.textContent = link.label;

    if (link.href === currentPage) {
      a.classList.add("current");
    }

    li.appendChild(a);
    navList.appendChild(li);
  });
})();

// Funció per copiar al porta-retalls l'ordre d'instal·lació
function myFunction() {
  navigator.clipboard.writeText('/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/rbuj-UOC/rbuj-UOC.github.io/refs/heads/main/init.sh)"');
}

(function () {
  const sumCreditsFromSubjects = (elements) => {
    let total = 0;

    elements.forEach(el => {
      const subjectId = el.id; // coincideix amb subjects[].id

      const subject = subjects.find(s => s.id === subjectId);
      if (subject) total += subject.credits;
    });

    return total;
  };

  chartData.forEach(course => {
    const h2Element = document.getElementById(course.label);
    const courseContainer = h2Element ? h2Element.closest('.course-no-expandable, .course') : null;

    if (courseContainer) {
      course.matriculats = sumCreditsFromSubjects(courseContainer.querySelectorAll('.subject.todo-WIP'));
      course.convalidats = sumCreditsFromSubjects(courseContainer.querySelectorAll('.subject.convalidada'));
      course.anivelladors = sumCreditsFromSubjects(courseContainer.querySelectorAll('.subject.anivelladora'));

      const aprovatsElements = courseContainer.querySelectorAll('.subject:not(.todo-WIP):not(.convalidada):not(.anivelladora):not(.tbd):not(.todo-Q1):not(.todo-Q2)');
      course.aprovats = sumCreditsFromSubjects(aprovatsElements);

      const totalCreditsObtinguts = course.convalidats + course.aprovats + course.anivelladors;
      const targetTotal = course.totals !== undefined ? course.totals : course.total;

      course.completat = (totalCreditsObtinguts === targetTotal);
    } else {
      course.matriculats = 0;
      course.convalidats = 0;
      course.anivelladors = 0;
      course.aprovats = 0;
      course.completat = false;
    }
  });
})();

// Mostrar els crèdits ECTS aprovats al final del títol de cada màster
(function () {
  chartData.forEach(item => {
    const container = document.getElementById(item.label);
    if (container) {
      const credits = document.createElement("span");
      credits.textContent = `${item.title} (${item.aprovats} ECTS)`;
      // container.textContent = "";
      container.appendChild(credits);
    }
  });
})();

// Generar el copyright dinàmicament
(function () {
  const copyrightYear = new Date().getFullYear();
  const copyrightText = '© ' + copyrightYear + ' Robert Buj';
  const copyrightElement = document.getElementById('copyright-year');
  if (copyrightElement) {
    copyrightElement.textContent = copyrightText;
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

// ----------------------------------------------
// Gràfica de barres de crèdits ECTS per semestre
// ----------------------------------------------
function plotGraficaCredits() {
  const ctx = document.getElementById('graficaCredits');
  ctx.height = 200;
  ctx.width = ctx.parentElement.offsetWidth;

  // Labels i dades comunes
  const labels = ['10/11-1', '10/11-2', '11/12-1', '11/12-2', '13/14-1',
    '23/24-1', '23/24-2', '24/25-1', '24/25-2',
    '25/26-1', '25/26-2', '26/27-1', '26/27-2',
    '27/28-1', '27/28-2', '28/29-1', '28/29-2',
    '29/30-1', '29/30-2'
  ];

  const data = [15, 20, 32, 22, 4, 18, 28, 24, 24, 30, 34, 34, 34, 27, 30, 30, 30, 30, 30];

  // Convertir anys a índexs
  const idxs = anysRessaltats.map(any => labels.indexOf(any));

  // Arrays automàtics
  const backgroundColors = labels.map((_, i) =>
    idxs.includes(i) ? highlightColor : baseColor
  );

  // Plugin per pintar intervals de fons
  const intervalsBackground = {
    id: 'intervalsBackground',
    beforeDraw(chart, args, options) {
      const { ctx, chartArea, scales } = chart;
      const yScale = scales.y;

      const intervals = options.intervals || [];

      intervals.forEach(interval => {
        const yTop = yScale.getPixelForValue(interval.max);
        const yBottom = yScale.getPixelForValue(interval.min);

        ctx.save();
        ctx.fillStyle = interval.color;
        ctx.fillRect(chartArea.left, yTop, chartArea.right - chartArea.left, yBottom - yTop);
        ctx.restore();
      });
    }
  };

  // Plugin per dibuixar una línia horitzontal
  const redLine = {
    id: 'redLine',
    afterDraw(chart, args, options) {
      const { ctx, chartArea, scales } = chart;
      const yScale = scales.y;

      const value = options.value; // valor Y on dibuixar la línia
      const y = yScale.getPixelForValue(value);

      ctx.save();
      ctx.strokeStyle = options.color || 'red';
      ctx.lineWidth = options.width || 2;

      ctx.beginPath();
      ctx.moveTo(chartArea.left, y);
      ctx.lineTo(chartArea.right, y);
      ctx.stroke();

      ctx.restore();
    }
  };

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
        intervalsBackground: {
          intervals: [
            { min: 0, max: 12, color: 'rgba(25, 38, 85, 0.40)' }, // temps complet
            { min: 12, max: 18, color: 'rgba(25, 38, 85, 0.30)' }, // temps complet
            { min: 18, max: 24, color: 'rgba(25, 38, 85, 0.20)' }, // parcial
            { min: 24, max: 30, color: 'rgba(25, 38, 85, 0.10)' }  // alta dedicació
          ]
        },
        redLine: {
          value: 24,
          color: 'red',
          width: 2
        },
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
    },
    plugins: [intervalsBackground, redLine]
  });
}

// --------------------------------------------------
// Gràfica circular amb els crèdits del curs/semestre
// --------------------------------------------------
function plotGraficaPercentatge() {
  const pieChartCanvas = document.getElementById("graficaPercentatge");

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
}

// -----------------------------------------------
// Gràfiques amb l'estat dels crèdits dels màsters
// -----------------------------------------------
function plotCreditsChartsGrid() {
  const container = document.getElementById("creditsChartsGrid");

  chartData.forEach((item, index) => {
    // Si l'element estat completat, no el mostrem
    if (item.completat) {
      return;
    }

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
}

// ----------------------------------------------
// dashboard de crèdits ECTS per semestre
// ----------------------------------------------

// Arrel del dashboard
const dashboard = document.getElementById("dashboard");

if (dashboard) {
  // 1) <canvas id="graficaCredits">
  const canvasCredits = document.createElement("canvas");
  canvasCredits.id = "graficaCredits";
  dashboard.appendChild(canvasCredits);

  // 2) <div class="containerLlistaClonar">
  const containerLlistaClonar = document.createElement("div");
  containerLlistaClonar.classList.add("containerLlistaClonar");

  // 2.1) <div id="clonar"> + llista generada
  const clonar = document.createElement("div");
  clonar.id = "clonar";

  const ul = document.createElement("ul");
  ul.classList.add("course-list");

  chartData.forEach(course => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = `#${course.label}`;

    // Afegir un indicador visual si el curs està completat
    if (course.completat === true) {
      a.textContent = `🎓 ${course.title}`;
    } else {
      a.textContent = course.title;
    }

    li.appendChild(a);
    ul.appendChild(li);
  });

  clonar.appendChild(ul);
  containerLlistaClonar.appendChild(clonar);

  // 2.2) <div id="percentatge"> + canvas
  const percentatge = document.createElement("div");
  percentatge.id = "percentatge";

  const canvasPercentatge = document.createElement("canvas");
  canvasPercentatge.id = "graficaPercentatge";

  percentatge.appendChild(canvasPercentatge);
  containerLlistaClonar.appendChild(percentatge);

  // Afegim el container al dashboard
  dashboard.appendChild(containerLlistaClonar);

  // 3) <div id="creditsChartsGrid" class="credits-charts-grid">
  const grid = document.createElement("div");
  grid.id = "creditsChartsGrid";
  grid.classList.add("credits-charts-grid");
  dashboard.appendChild(grid);

  plotGraficaCredits();
  plotGraficaPercentatge();
  plotCreditsChartsGrid();
}

// ----------------------------------------------

// Inicialitzar els botons per commutar la visibilitat de les assignatures
document.addEventListener('DOMContentLoaded', function () {
  // Botons per expandir/col·lapsar totes les assignatures d'un curs
  const courses = document.querySelectorAll('.course');
  courses.forEach(course => {
    const dashboard = course.querySelector('.dashboard');
    if (dashboard) {
      const h2 = course.querySelector('h2');
      if (h2) {
        const expandBtn = document.createElement('button');
        expandBtn.className = 'course-expand-btn';
        expandBtn.textContent = '⥥';
        expandBtn.setAttribute('aria-label', 'Expandeix/col·lapsa totes les assignatures');
        h2.appendChild(expandBtn);
        expandBtn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          const subjectBodies = course.querySelectorAll('.subject-body');
          const allVisible = Array.from(subjectBodies).every(body => body.classList.contains('visible'));
          subjectBodies.forEach((body) => {
            if (allVisible) {
              body.classList.remove('visible');
            } else {
              body.classList.add('visible');
            }
          });
          if (allVisible) {
            expandBtn.classList.remove('expanded');
          } else {
            expandBtn.classList.add('expanded');
          }
        });
      }
    }
  });
});
