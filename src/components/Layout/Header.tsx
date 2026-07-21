import { Bell, Search, Settings } from "lucide-react";
import CustomInput from "../custom/CustomInput";
import { Button } from "../ui/button";



const Header = () => {
  return (
    <div className="w-full max-h-25 h-fit bg-secondary border-b-2 p-5">
      <div className="flex justify-between items-center pl-5 pr-5 ">
        <CustomInput
          start={<Search className="size-10 pr-3 " color="black" />}
          placeholder="Search"
          className="bg-primary-foreground py-5 w-120 shadow"
        />
        <div className="flex justify-center items-center gap-5">
          <Button variant="outline" className="cursor-pointer size-12 shadow">
            <Bell className="size-5 "/>
          </Button>
          <Button variant="outline" className="cursor-pointer size-12 shadow">
            <Settings className="size-5"/>
          </Button>
          <div className="flex justify-center items-center gap-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQzFWxj0S7AVqUL5nhSDNmjWq5tv_zm1NdvaBUkM3SJmefg9llPLGi2Dg&s=10"
              alt="fdf"
              className="w-12 h-12 rounded-xl shadow"
            />
            <div>
              <p className=" font-black">Karimzoda Mustafo</p>
              <p className=" text-black/50">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header