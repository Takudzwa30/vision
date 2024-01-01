"use client";

// Libraries
import dynamic from "next/dynamic";

// Icons
import { IoWallet, IoRocketSharp, IoCartSharp, IoBuild } from "react-icons/io5";

// Components
import CardWrapper from "@/components/ui/cardWrapper/CardWrapper";

// Styles
import Style from "./Users.module.css";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface CardProps {
  title: string;
  value: number;
  barWidth: number;
  icon: React.ReactNode;
  symbol?: string;
}

const Users: React.FC = () => {
  // Variables
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      style: {
        fontSize: "10px",
        fontFamily: "Plus Jakarta Display",
      },
      theme: "dark",
    },

    xaxis: {
      categories: [
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
        show: false,
        style: {
          colors: "#fff",
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
      show: true,
      labels: {
        show: true,
        style: {
          colors: "#fff",
          fontSize: "10px",
          fontFamily: "Plus Jakarta Display",
        },
      },
    },

    grid: {
      show: false,
    },
    fill: {
      colors: ["#fff"],
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        columnWidth: "12px",
      },
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 0,
            },
          },
        },
      },
    ],
    series: [
      {
        name: "Users",
        data: [330, 250, 110, 300, 490, 350, 270, 130, 425],
      },
    ],
  };

  const data: CardProps[] = [
    {
      title: "Users",
      value: 32984,
      barWidth: 70,
      icon: <IoWallet />,
    },
    {
      title: "Clicks",
      value: 24,
      symbol: "m",
      barWidth: 70,
      icon: <IoRocketSharp />,
    },
    {
      title: "Sales",
      value: 24700,
      symbol: "$",
      barWidth: 70,
      icon: <IoCartSharp />,
    },
    {
      title: "Items",
      value: 320,
      barWidth: 70,
      icon: <IoBuild />,
    },
  ];

  return (
    <CardWrapper>
      <div className={Style.chartWrapper}>
        <Chart
          options={chartOptions}
          series={chartOptions?.series}
          type="bar"
          height={250}
          width={"100%"}
        />
      </div>
      <div className={Style.headings}>
        <h5>Active Users</h5>
        <p>
          (+23) <span>than last week</span>
        </p>
      </div>
      <div className={Style.cards}>
        {data.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              icon={item.icon}
              value={item.value}
              barWidth={item.barWidth}
              symbol={item.symbol}
            />
          );
        })}
      </div>
    </CardWrapper>
  );
};

const Card: React.FC<CardProps> = ({
  icon,
  title,
  value,
  barWidth,
  symbol,
}) => {
  return (
    <div className={Style.card}>
      <div className={Style.titleWrapper}>
        <div className={Style.iconWrapper}>{icon}</div>
        <h6>{title}</h6>
      </div>
      <h5>
        {value}
        {symbol}
      </h5>
      <div className={Style.progressBar}>
        <div
          style={{
            width: `${barWidth}%`,
          }}
        />
      </div>
    </div>
  );
};

export default Users;
