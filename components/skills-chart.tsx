'use client';

import dynamic from 'next/dynamic';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

const Radar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Radar), {
  ssr: false,
});

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const data = {
  labels: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Java', 'UI/UX'],
  datasets: [
    {
      label: 'Skill Level',
      data: [95, 90, 85, 90, 70, 80],
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(59, 130, 246, 1)',
    },
  ],
};

const options = {
  scales: {
    r: {
      angleLines: { display: false },
      suggestedMin: 0,
      suggestedMax: 100,
      pointLabels: { font: { size: 16 } },
      ticks: { stepSize: 20, font: { size: 12 } },
    },
  },
  plugins: {
    legend: { display: false },
  },
};

export function SkillsChart() {
  return <Radar data={data} options={options} />;
}
