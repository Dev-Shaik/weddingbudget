import Image from "next/image";

const loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Image src={"/beanEater.svg"} alt="bean eater" width={100} height={100} />
    </div>
  );
};

export default loading;
