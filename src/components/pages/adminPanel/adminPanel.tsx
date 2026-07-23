import { useStore } from "@/components/store/store";
import { Button } from "@/components/ui/button";
import { deleteProduct, getProducts } from "@/lib/api/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { DataTable } from "mantine-datatable";
import { useState } from "react";
import CreateModal from "./modals/CreateModal";

const AdminPanel = () => {
  const [openCreateModal, setOpenCreateModal]=useState(false)
  const { search } = useStore();
  const { data} = useQuery({
    queryKey: ["products", search],
    queryFn: () => getProducts(search),
  });
  

  const filtered = data?.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );
const queryClient = useQueryClient();
  const {mutate: deletingProd}=useMutation({
    mutationFn:deleteProduct,
    onSuccess:()=>{
      queryClient.invalidateQueries({
        queryKey: ["products", search],
      });
    },
  });


  return (
    <div  className="p-10">
      <div className="flex justify-between p-3"><p className="text-2xl font-black">ADMIN PANEL</p><Button variant="outline" className="w-30 h-12 border shadow text-2xl font-black text-primary cursor-pointer" onClick={()=>setOpenCreateModal(true)}>+ Add</Button></div>
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
            render: (el) => (
              <div className="flex gap-2 justify-center ">
                <Button>Edit</Button>

                <Button variant="destructive" className="cursor-pointer" onClick={()=>deletingProd(el.id)}>
                  Delete
                </Button>
              </div>
            ),
          },
        ]}
      />
      <CreateModal openCreateModal={openCreateModal} setOpenCreateModal={setOpenCreateModal}/>
    </div>
  );
};

export default AdminPanel;
