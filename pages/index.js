import axios from "axios";

const card = [
  { name: "man", id: 1 },
  { name: "man", id: 2 },
  { name: "man", id: 3 },
  { name: "man", id: 4 },
  { name: "man", id: 5 },
];

export default function Home() {
  return (
    <>
      <div>
        <div className="bg-[#292929] h-[80px] py-[16px] px-[30px]">
          <h2 className="font-light text-[#fff] border p-2 w-[130px] tracking-wider text-[20px]">
            MyTestApp
          </h2>
        </div>
        <div className="flex text-left flex-col h-[550px] text-[#fff] bg-hero bg-no-repeat bg-cover bg-center bg-fixed pt-[100px] px-[30px] text-[72px] font-[700]">
          <h2>Watch</h2>
          <h2>something</h2>
          <h2>incredible.</h2>
        </div>
        <div className="px-[30px]">
          <div className="my-[45px]">
            <p>Search</p>
            <input
              className="border-[1px] border-[#000] py-2 my-2 focus:outline-none px-3 w-full"
              placeholder=""
            />
          </div>

          <div className="grid grid-cols-4 gap-2">
            {card.map((i) => (
              <div
                key={i.id}
                className="w-[300px] h-[300px] rounded-md bg-[#000] mb-[45px]"
              >
                <p className="flex justify-center items-center h-[300px] text-[#fff]">{i.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
