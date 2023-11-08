import Link from "next/link";
import { BasicModal } from "@/components/Modal/BasicModal";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Page({ searchParams }: Props) {
  const showModal = searchParams?.modal;

  return (
    <>
      <Link
        href="/?modal=true"
        className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
      >
        OPEN THE MODAL
      </Link>

      {showModal && <BasicModal />}
    </>
  );
}