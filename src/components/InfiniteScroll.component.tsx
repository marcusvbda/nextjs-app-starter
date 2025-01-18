"use client";
import { ReactNode, useEffect, useState } from "react";

interface IInfiniteScroll {
  className?: string;
  fetchAction: any;
  perPage?: number;
  renderRow: any;
}

export const InfiniteScroll = ({
  perPage = 10,
  fetchAction,
  className = "",
  renderRow,
}: // perPageOptions = [10, 25, 50, 100],
IInfiniteScroll): ReactNode => {
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [firstLoaded, setFirstLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    const _data: any = await fetchAction({
      page,
      perPage,
    });
    setData(_data || []);
    setLoading(false);
    setFirstLoaded(true);
  };

  useEffect(() => {
    loadData();
  }, [page]);

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
      {data.map((row: any, index: number) => renderRow(index, row))}
    </div>
  );
};
