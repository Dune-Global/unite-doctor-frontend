"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { UniteModal } from "@/components/common/UniteModal";
import { getDoctorPatientDetails } from "@/api/patients/patientsAPI";
import { IDoctorPatientDetails } from "@/types/doctor-patient-details";
import HistoryAccordion from "@/components/patient-details/HistoryAccordion";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: Readonly<DataTableProps<TData, TValue>>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [doctorPatientDetails, setDoctorPatientDetails] =
    useState<IDoctorPatientDetails | null>(null);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  const handleRowClick = (rowData: any) => {
    console.log("Row data", rowData);
    setSelectedRow(rowData);

    setIsModalOpen(true);
  };

  useEffect(() => {
    const getDoctorPatientDetailsBySessionIdActionHandler = (
      patientSessionId: string
    ) => {
      getDoctorPatientDetails(patientSessionId)
        .then((res) => {
          console.log("\n\n\nDoctor patient details res", res.data);
          setDoctorPatientDetails(res.data);
          console.log("\n\n\nDoctor patient details", doctorPatientDetails);
          // if (res.data) {
          // getDoctorDetailsActionHandler(res.data.doctor);
          // }
          // setIsDoctorPatientLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching doctor patient details", error);
          // setIsDoctorPatientLoading(false);
        });
    };

    // const getDoctorDetailsActionHandler = (doctorId: string) => {
    //   getDoctorById(doctorId)
    //     .then((res) => {
    //       setDoctorDetails(res.data);
    //       console.log("\n\n\nDoctor details", doctorDetails);
    //       // setIsDoctorDetailsLoading(false);
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching doctor details", error);
    //       // setIsDoctorDetailsLoading(false);
    //     });
    // };

    getDoctorPatientDetailsBySessionIdActionHandler(selectedRow?.sessionId);
  }, [selectedRow, isModalOpen]);

  return (
    <>
      <div className="flex items-center py-4 gap-3">
        <Input
          placeholder="Filter doctor by name..."
          value={
            (table.getColumn("doctorName")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("doctorName")?.setFilterValue(event.target.value)
          }
          className="max-w-sm border-ugray-200"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="border-ugray-200">
            <Button variant="outline" className="ml-auto text-ugray-400">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md">
        <Table className="text-ugray-600">
          <TableHeader className="bg-ugray-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-ugray-50">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="py-5">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="bg-ugray-0 border-ugray-50 border-y-8"
                  onClick={() => handleRowClick(row.original)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <UniteModal
        // title={selectedRow?.doctorName}
        title={selectedRow?.doctorDetails.doctorName}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content={
          <div className="my-16">
            {doctorPatientDetails?.prescription &&
            doctorPatientDetails.prescription.length > 0 ? (
              doctorPatientDetails.prescription.map(
                (prescriptionItem, index) => (
                  <HistoryAccordion
                    key={prescriptionItem._id}
                    details={prescriptionItem}
                    isLastItem={
                      index === doctorPatientDetails.prescription.length - 1
                    }
                  />
                )
              )
            ) : (
              <p className="text-ugray-200 text-center ">
                No history available
              </p>
            )}
          </div>
        }
      />

      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </>
  );
}

