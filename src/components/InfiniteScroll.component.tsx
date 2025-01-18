"use client";
import { ReactNode, useEffect, useState } from "react";

interface IInfiniteScroll {
  className?: string;
  fetchRows: any;
  fetchTotal: any;
  perPage?: number;
  renderRow: any;
  skeleton?: ReactNode;
}

export const InfiniteScroll = ({
  perPage = 10,
  fetchRows,
  fetchTotal,
  className = "",
  renderRow,
  skeleton,
}: IInfiniteScroll): ReactNode => {
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    const _data: any = await fetchRows({
      page,
      perPage,
    });
    setData(_data || []);
    setLoading(false);
  };

  const loadTotal = async () => {
    const _total = await fetchTotal();
    setTotal(_total);
  };

  useEffect(() => {
    Promise.all([loadData(), loadTotal()]);
  }, [page]);

  return (
    <div className={`overflow-x-auto  ${className}`}>
      {data.map((row: any, index: number) => renderRow(index, row))}
      {loading ? (
        skeleton ? (
          skeleton
        ) : (
          <div className="w-full flex items-center justify-center py-10">
            <span className="loading loading-spinner loading-md" />
          </div>
        )
      ) : (
        total !== null && <>{total > data.length && <>Carregar mais</>}</>
      )}
    </div>
  );
};
