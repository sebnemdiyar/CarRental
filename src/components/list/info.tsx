import type { FC } from "react";
import type { Car } from "../../types";
import { motion } from "motion/react";
import { driveOptions } from "../../constant";

interface Props {
  car: Car;
}
const Info: FC<Props> = ({ car }) => {
  // ikonlar ve textleri bir dizi içerisinde tanımladık.
  // ekrana basılacak elemanlar
  const arr = [
    {
      icon: "/steering-wheel.svg",
      text: car?.trany.includes("Automatic") ? "Auto" : "Manual",
    },
    {
      icon: "/tire.svg",
      text: driveOptions[car.drive] || "Bilinmiyor", // text: driveOptions[car?.drive as keyof typeof driveOptions] bu yöntemle string olan drive nesnesinin (types/index içinde tanımladığımız drive: string) driveOptions içindeki key değerlerini almasını sağlıyoruz. bu bir yöntem, bunu her kullandığımızda yazmamız gerek. diğer yönteem ise baştan doğru tanımlamak. yani types/index içindeki drive'ı doğru tanımlamak. bu daha geniş bir çözüm.
    },
    {
      icon: "/calendar.svg",
      text: car?.year || "Bilinmiyor",
    },
  ];

  // animasyon ayarları
  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="flex-between">
      {arr.map((item, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          whileInView="visible"
          variants={variants}
          transition={{ delay: index * 0.1 }}
          className="flex justify-center items-center flex-col gap-1"
        >
          <img src={item.icon} width={25} height={25} />
          <p>{item.text}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Info;
