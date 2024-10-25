import { Drawer } from "flowbite-react";
import { RxCross2 } from "react-icons/rx";

export default function Component(prop) {
  const { isOpen, setIsOpen, children } = prop;

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="">
        <button onClick={() => setIsOpen(false)}>
          <RxCross2
            className= {!isOpen ? "hidden" :" fixed top-0 left-[321px] z-50 text-white bg-[#E95441]"}
            size={30}
          />
        </button>
        <Drawer
          open={isOpen}
          onClose={handleClose}
          className="px-0 py-0 transition duration-700"
        >
          <Drawer.Items>
            <div className="h-screen">

            {children}
            </div>
          </Drawer.Items>
        </Drawer>
      </div>
    </>
  );
}
