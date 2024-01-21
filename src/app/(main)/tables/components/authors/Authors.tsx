"use client";

// Libraries
import { createTheme, ThemeProvider, useTheme } from "@mui/material";
import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import Image, { StaticImageData } from "next/image";

// Icons
import adobeLogo from "@/assets/icons/adobeLogo.svg";
import members5 from "@/assets/icons/members5.svg";

// Images
import authorEsther from "@/assets/images/authorEsther.png";

// Components
import CardWrapper from "@/components/ui/cardWrapper/CardWrapper";

// Styles
import Style from "./Authors.module.css";

// Types
type Project = {
  author: {
    email: string;
    picture: StaticImageData;
    name: string;
  };
  function: {
    position: string;
    organization: string;
  };
  status?: boolean;
  employed: string;
};

// Data
const data: Project[] = [
  {
    author: {
      picture: authorEsther,
      name: "Esthera Jackson",
      email: "esthera@simmmple.com",
    },
    function: {
      position: "Manager",
      organization: "Organization",
    },
    status: true,
    employed: "14/06/21",
  },
  {
    author: {
      picture: authorEsther,
      name: "Esthera Jackson",
      email: "esthera@simmmple.com",
    },
    function: {
      position: "Manager",
      organization: "Organization",
    },
    status: false,
    employed: "14/06/21",
  },
  {
    author: {
      picture: authorEsther,
      name: "Esthera Jackson",
      email: "esthera@simmmple.com",
    },
    function: {
      position: "Manager",
      organization: "Organization",
    },
    status: true,
    employed: "14/06/21",
  },
  {
    author: {
      picture: authorEsther,
      name: "Esthera Jackson",
      email: "esthera@simmmple.com",
    },
    function: {
      position: "Manager",
      organization: "Organization",
    },
    status: true,
    employed: "14/06/21",
  },
  {
    author: {
      picture: authorEsther,
      name: "Esthera Jackson",
      email: "esthera@simmmple.com",
    },
    function: {
      position: "Manager",
      organization: "Organization",
    },
    status: false,
    employed: "14/06/21",
  },
  {
    author: {
      picture: authorEsther,
      name: "Esthera Jackson",
      email: "esthera@simmmple.com",
    },
    function: {
      position: "Manager",
      organization: "Organization",
    },
    status: false,
    employed: "14/06/21",
  },
];

const Authors = () => {
  const globalTheme = useTheme();
  const tableTheme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: "#90caf9",
          },
          background: {
            default: "#66000000",
            paper: "#1e1e1e",
          },
          text: {
            secondary: "#fff",
            primary: "#fff",
          },
        },
      }),
    []
  );

  // should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Project>[]>(
    () => [
      {
        accessorKey: "author",
        header: "Author",
        size: 300,
        Cell: ({ cell }) => (
          <div className={Style.tableCompany}>
            <Image
              src={cell.row.original.author.picture.src}
              alt="author picture"
              width={100}
              height={100}
            />
            <div>
              <p>{cell.row.original.author.name}</p>
              <p>{cell.row.original.author.email}</p>
            </div>
          </div>
        ),
      },
      {
        accessorKey: "function",
        header: "Function",
        size: 200,
        Cell: ({ cell }) => (
          <div className={Style.functionCell}>
            <p>{cell.row.original.function.position}</p>
            <p>{cell.row.original.function.organization}</p>
          </div>
        ),
      },
      {
        accessorKey: "status",
        header: "Status",
        size: 150,
        Cell: ({ cell }) => (
          <div
            className={
              cell.row.original.status === true ? Style.online : Style.offline
            }
          >
            {cell.row.original.status === true ? "Online" : "Offline"}
          </div>
        ),
      },
      {
        accessorKey: "employed",
        header: "Employed",
        size: 150,
        Cell: ({ cell }) => cell.row.original.employed,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    muiTableHeadCellProps: {
      sx: {
        color: "#fff",
        fontSize: "1.1rem",
      },
    },
    muiTableBodyCellProps: {
      sx: {
        border: "1px solid rgba(81, 81, 81, .5)",
        color: "#fff",
      },
    },

    muiPaginationProps: {
      color: "secondary",
      rowsPerPageOptions: [2, 4, 6, 8, 10],
      shape: "rounded",
      variant: "outlined",
    },
    enableColumnFilterModes: false,
    enableColumnOrdering: true,
    enableGrouping: true,
    enableColumnPinning: true,
    enableFacetedValues: true,
    enableRowActions: false,
    enableRowSelection: true,
    initialState: { showColumnFilters: true, showGlobalFilter: true },
    paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "bottom",
    muiSearchTextFieldProps: {
      size: "small",
      variant: "outlined",
    },
  });

  return (
    <CardWrapper>
      <h5 className={Style.tableHeading}>Authors Table</h5>
      <ThemeProvider theme={tableTheme}>
        <MaterialReactTable table={table} />
      </ThemeProvider>
    </CardWrapper>
  );
};

export default Authors;
