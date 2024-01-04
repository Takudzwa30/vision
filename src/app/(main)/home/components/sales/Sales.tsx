"use client";

// Libraries
import dynamic from "next/dynamic";

// Components
import CardWrapper from "@/components/ui/cardWrapper/CardWrapper";

// Styles
import Style from "./Sales.module.css";

const SalesChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Sales: React.FC = () => {
  // Variables
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      theme: "dark",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          colors: "#c8cfca",
          fontSize: "10px",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#c8cfca",
          fontSize: "10px",
        },
      },
    },
    legend: {
      show: false,
    },
    grid: {
      strokeDashArray: 5,
      borderColor: "#56577A",
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        shadeIntensity: 0,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.8,
        opacityTo: 0,
        stops: [],
      },
      colors: ["#0075FF", "#2CD9FF"],
    },
    colors: ["#0075FF", "#2CD9FF"],
    series: [
      {
        name: "Mobile apps",
        data: [500, 250, 300, 220, 500, 250, 300, 230, 300, 350, 250, 400],
      },
      {
        name: "Websites",
        data: [200, 230, 300, 350, 370, 420, 550, 350, 400, 500, 330, 550],
      },
    ],
  };

  return (
    <CardWrapper>
      <div className={Style.headings}>
        <h5>Sales overview</h5>
        <p>
          (+5) more <span>in 2021</span>
        </p>
      </div>
      <SalesChart
        options={chartOptions}
        series={chartOptions?.series}
        type="area"
        height={350}
        width={"100%"}
      />
    </CardWrapper>
  );
};

export default Sales;
