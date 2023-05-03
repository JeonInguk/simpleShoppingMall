import Image from "next/image";
import earphones from "../../public/earphones.jpeg";
import headphones from "../../public/headphones.jpeg";
import speaker from "../../public/speaker.jpeg";

interface Props {
  individualValue: SellingItem;
  page: number;
}

export default function SellingItem({ individualValue, page }: Props) {
  const { price, title, description } = individualValue;
  return (
    <div className="display: flex-col">
      <Image src={page === 1 ? earphones : page === 2 ? headphones : speaker} alt="img" width={300} height={300} />
      <div className="text-xl">{title}</div>
      <div className="text-sm">{description}</div>
      <div>{price}원</div>
    </div>
  );
}
