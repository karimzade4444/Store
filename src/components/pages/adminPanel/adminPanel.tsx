import { useStore } from "@/components/store/store";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/lib/api/api";
import { useQuery } from "@tanstack/react-query";
import { DataTable } from "mantine-datatable";

const AdminPanel = () => {
  const { data} = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(""),
  });
  const { search } = useStore();

  const filtered = data?.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div  className="p-10">
      <div className="flex justify-end"><Button variant="outline" className="w-30 h-12 border shadow text-2xl font-black text-primary cursor-pointer">+ Add</Button></div>
      <DataTable
        records={filtered ?? []}
        columns={[
          {
            accessor: "id",
            title: "ID",
            titleClassName: "text-center",
            textAlign: "center",
          },
          {
            accessor: "img",
            title: "Image",
            titleClassName: "text-center",
            textAlign: "center",
            render: (record) => (
              <div className="flex justify-center">
                <img
                  src={record.img}
                  className="w-14 h-14 object-cover rounded "
                />
              </div>
            ),
          },
          {
            accessor: "name",
            title: "Product",
            titleClassName: "text-center",
            textAlign: "center",
          },
          {
            accessor: "price",
            title: "Price",
            titleClassName: "text-center",
            textAlign: "center",
            render: (record) => `$${record.price.toFixed(2)}`,
          },
          {
            accessor: "stock",
            title: "Stock",
            titleClassName: "text-center",
            textAlign: "center",
          },
          {
            accessor: "actions",
            title: "Actions",
            titleClassName: "text-center",
            textAlign: "center",
            render: () => (
              <div className="flex gap-2 justify-center ">
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
