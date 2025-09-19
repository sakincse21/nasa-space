import Link from "next/link";
import { Button } from "./ui/button";

export default function ButtonWithLink({ name, variant, link }) {
    
  return (
    <Link href={`/${link}`}>
      <Button variant={variant}>{name}</Button>
    </Link>
  );
}
