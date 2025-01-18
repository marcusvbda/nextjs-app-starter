"use client";
import { ReactNode, useEffect, useState } from "react";

interface IDatatable {
  className?: string;
  columns: any[];
  // perPageOptions?: number[];
  perPage?: number;
  fetchAction: any;
}

export interface IFetchAction {
  page: number;
  perPage: number;
  sortField: string;
  sortDirection: string;
}

export interface IFetchActionResponse {
  items: any[];
  total: number;
}

export const Datatable = ({
  columns,
  perPage = 10,
  fetchAction,
  className = "",
}: // perPageOptions = [10, 25, 50, 100],
IDatatable): ReactNode => {
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [sortDirection, setSortDirection] = useState("desc");
  const firstSortable = columns.find((x: any) => x.sortable);
  const [sortField, setSortField] = useState(
    firstSortable?.index || firstSortable?.name
  );
  const [firstLoaded, setFirstLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    const _data: any = await fetchAction({
      page,
      perPage,
      sortField,
      sortDirection,
    });
    setData(_data || []);
    setLoading(false);
    setFirstLoaded(true);
  };

  useEffect(() => {
    loadData();
  }, [page, sortField, sortDirection]);

  const handleSort = (column: any) => {
    setLoading(true);
    setSortField(column?.index || column?.name);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  if (!firstLoaded) {
    return (
      <div className="w-full flex items-center justify-center py-10">
        <span className="loading loading-spinner loading-md" />
      </div>
    );
  }

  return (
    <div className={`overflow-x-auto relative ${className}`}>
      {loading && (
        <div className="w-full flex items-center justify-center bg-gray-50/10 absolute inset-0 z-10 cursor-wait">
          <span className="loading loading-spinner loading-md" />
        </div>
      )}
      <table className="table table-zebra">
        <thead>
          <tr>
            {columns.map((column: any, index: number) => (
              <th
                key={index}
                onClick={() => handleSort(column)}
                className={column?.sortable ? "cursor-pointer" : ""}
              >
                {column.name}
                {column?.sortable && (
                  <>
                    {sortField === (column?.index || column?.name) &&
                      sortDirection === "asc" && (
                        <span className="ml-2">▲</span>
                      )}
                    {sortField === (column?.index || column?.name) &&
                      sortDirection === "desc" && (
                        <span className="ml-2">▼</span>
                      )}
                  </>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row: any, index: number) => (
            <tr key={index}>
              {columns.map((column: any, index: number) => (
                <td key={index}>
                  {column?.body
                    ? column.body(row)
                    : row?.[column?.index || column?.name]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
