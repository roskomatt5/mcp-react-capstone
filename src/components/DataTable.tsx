import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import { server_calls } from "../api/servers";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetData } from "../custom-hooks/FetchData";

const columns: GridColDef[] = [
  { field: "id", headerName: "id", flex: 1, hideable: true },
  { field: "title", headerName: "Title", flex: 1 },
  {
    field: "link",
    headerName: "Link",
    flex: 1,
    renderCell: (params) => (
      <a href={params.value} target="_blank" rel="noopener noreferrer">
        {params.value}
      </a>
    ),
  },
  {
    field: "repo_link",
    headerName: "Github Repository",
    flex: 1,
    renderCell: (params) => (
      <a href={params.value} target="_blank" rel="noopener noreferrer">
        {params.value}
      </a>
    ),
  },
  { field: "date_created", headerName: "Date Created", flex: 1 },
];

function DataTable() {
  let [open, setOpen] = useState(false);
  const { contactData, getData } = useGetData();
  const [selectionModel, setSelectionModel] = useState<string[]>([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deleteData = () => {
    console.log(selectionModel);

    selectionModel.forEach(async (id) => {
      try {
        await server_calls.delete(id);
      } catch (error) {
        console.error(`Failed to delete data with ID ${id}:`, error);
      }
    });

    getData();

    console.log(`Selection model: ${selectionModel}`);

    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <>
      <Modal id={selectionModel} open={open} onClose={handleClose} />
      <div className="flex flex-row">
        <div>
          <button
            className="p-3 bg-black rounded m-3 text-white hover:bg-white hover:text-black"
            onClick={() => handleOpen()}
          >
            Add To Portfolio
          </button>
        </div>
        <Button
          onClick={handleOpen}
          className="p-3 bg-black rounded m-3 text-white hover:bg-white hover:text-black"
        >
          Update
        </Button>
        <Button
          onClick={deleteData}
          className="p-3 bg-black rounded m-3 text-white hover:bg-white hover:text-black"
        >
          Delete
        </Button>
      </div>
      <div
        className={open ? "hidden" : "container mx-10 my-5 flex flex-col"}
        style={{ height: 400, width: "100%" }}
      >
        <h2 className="p-3 bg-black text-white my-2 rounded">My Portfolio</h2>
        <DataGrid
          rows={contactData}
          columns={columns}
          checkboxSelection={true}
          onRowSelectionModelChange={(item: any) => {
            console.log(item);
            setSelectionModel(item);
          }}
        />
      </div>
    </>
  );
}

export default DataTable;
