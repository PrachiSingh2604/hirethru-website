import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { Chart } from "chart.js/auto";
import { animateCounter } from "@/lib/animations";

const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const placementsChartRef = useRef<HTMLCanvasElement>(null);
  const satisfactionChartRef = useRef<HTMLCanvasElement>(null);
  const partnersChartRef = useRef<HTMLCanvasElement>(null);
  const experienceChartRef = useRef<HTMLCanvasElement>(null);
  
  const [hasAnimated, setHasAnimated] = useState(false);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      // Initialize the counters
      const counters = document.querySelectorAll('.stats-counter');
      counters.forEach(counter => {
        const target = parseInt(counter?.getAttribute('data-target') || '0', 10);
        if (counter instanceof HTMLElement) {
          animateCounter(counter, target);
        }
      });

      // Initialize the charts
      const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            display: false
          },
          y: {
            display: false
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      };

      // Placements chart
      if (placementsChartRef.current) {
        new Chart(placementsChartRef.current, {
          type: 'line',
          data: {
            labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
            datasets: [{
              data: [120, 190, 240, 310, 380, 450, 500],
              borderColor: '#ffffff',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderWidth: 2,
              tension: 0.4,
              fill: true
            }]
          },
          options: chartOptions
        });
      }

      // Satisfaction chart
      if (satisfactionChartRef.current) {
        new Chart(satisfactionChartRef.current, {
          type: 'line',
          data: {
            labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
            datasets: [{
              data: [92, 94, 95, 96, 97, 98, 98],
              borderColor: '#ffffff',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderWidth: 2,
              tension: 0.4,
              fill: true
            }]
          },
          options: chartOptions
        });
      }

      // Partners chart
      if (partnersChartRef.current) {
        new Chart(partnersChartRef.current, {
          type: 'line',
          data: {
            labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
            datasets: [{
              data: [30, 45, 65, 80, 95, 110, 120],
              borderColor: '#ffffff',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderWidth: 2,
              tension: 0.4,
              fill: true
            }]
          },
          options: chartOptions
        });
      }

      // Experience chart
      if (experienceChartRef.current) {
        new Chart(experienceChartRef.current, {
          type: 'line',
          data: {
            labels: ['2008', '2010', '2012', '2014', '2016', '2018', '2020', '2022'],
            datasets: [{
              data: [1, 3, 5, 7, 9, 11, 13, 15],
              borderColor: '#ffffff',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderWidth: 2,
              tension: 0.4,
              fill: true
            }]
          },
          options: chartOptions
        });
      }

      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <section id="stats" ref={sectionRef} className="py-20 bg-gradient-to-r from-primary-dark to-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <div className="hidden lg:block absolute right-0 -top-10 perspective-element">
            <div className="cube-wrapper">
              <div className="cube">
                <div className="cube-face front"></div>
                <div className="cube-face back"></div>
                <div className="cube-face right"></div>
                <div className="cube-face left"></div>
                <div className="cube-face top"></div>
                <div className="cube-face bottom"></div>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white">Our Impact in Numbers</h2>
          <div className="h-1 w-20 bg-accent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center transform transition hover:-translate-y-1">
            <div className="text-white text-4xl font-bold mb-2">
              <span className="stats-counter" data-target="500">0</span>+
            </div>
            <div className="text-gray-200 text-lg">Successful Placements</div>
            <div className="mt-4">
              <canvas ref={placementsChartRef} width="100" height="60"></canvas>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center transform transition hover:-translate-y-1">
            <div className="text-white text-4xl font-bold mb-2">
              <span className="stats-counter" data-target="98">0</span>%
            </div>
            <div className="text-gray-200 text-lg">Client Satisfaction</div>
            <div className="mt-4">
              <canvas ref={satisfactionChartRef} width="100" height="60"></canvas>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center transform transition hover:-translate-y-1">
            <div className="text-white text-4xl font-bold mb-2">
              <span className="stats-counter" data-target="120">0</span>+
            </div>
            <div className="text-gray-200 text-lg">Partner Companies</div>
            <div className="mt-4">
              <canvas ref={partnersChartRef} width="100" height="60"></canvas>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center transform transition hover:-translate-y-1">
            <div className="text-white text-4xl font-bold mb-2">
              <span className="stats-counter" data-target="15">0</span>
            </div>
            <div className="text-gray-200 text-lg">Years of Experience</div>
            <div className="mt-4">
              <canvas ref={experienceChartRef} width="100" height="60"></canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
