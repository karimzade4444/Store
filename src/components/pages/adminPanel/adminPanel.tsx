import { useStore } from "@/components/store/store";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/lib/api/api";
import { useQuery } from "@tanstack/react-query";
import { DataTable } from "mantine-datatable";

const AdminPanel = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(""),
  });
  const { search } = useStore();

  const filtered = data?.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div className="p-10">
      <DataTable
        records={filtered ?? []}
        columns={[
          {
            accessor: "id",
            title: "ID",
          },
          {
            accessor: "img",
            title: "Image",
            render: (record) => (
              <img
                src={record.img}
                className="w-14 h-14 object-cover rounded"
              />
            ),
          },
          {
            accessor: "name",
            title: "Product",
          },
          {
            accessor: "price",
            title: "Price",
            render: (record) => `$${record.price.toFixed(2)}`,
          },
          {
            accessor: "stock",
            title: "Stock",
          },
          {
            accessor: "actions",
            title: "Actions",
            render: (record) => (
              <div className="flex gap-2 ">
                <Button>Edit</Button>

                <Button variant="destructive" className="cursor-pointer">
                  Delete
                </Button>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

export default AdminPanel;
