import { AnimeDetail } from "@/components/animedetail";
import { RecommendedList } from "@/components/animelist";

export default async function DetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="relative flex flex-col gap-2 mb-6">
      <AnimeDetail slug={slug} />
      <RecommendedList slug={slug} header="Maybe you like this" />
    </div>
  );
}
